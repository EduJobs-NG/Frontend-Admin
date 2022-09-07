import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { WrapperHeader } from "../components/WrapperHeader";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { ErrorIndicator } from "../components/ErrorIndicator";
import { Alert } from "../components/Alert";

import add from "../assets/add.svg";
import close from "../assets/close.svg";
import open from "../assets/open.svg";

export const FAQ = () => {
  const [currentFaqId, setCurrentFaqId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showFormAction, setShowFormAction] = useState(null);
  const [toDeleteId, setToDeleteId] = useState(null);
  const [toEditId, setToEditId] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [isPositive, setIsPositive] = useState(null);

  const getFaqs = useAxios();
  const postFaqs = useAxios();
  const deleteFaqs = useAxios();
  const editFaqs = useAxios();

  const {
    makeRequest: getAllFaqs,
    isLoading: isGettingFaqs,
    success: gotFaqsSuccessfully,
    errorMessage: getFaqsErrorMessage,
    setErrorMessage: setGetFaqsErrorMessage,
    data: getFaqData,
  } = getFaqs();

  const {
    makeRequest: deletelFaq,
    isLoading: deletingFaq,
    success: deletedFaqSuccessfully,
    errorMessage: deleteFaqErrorMessage,
  } = deleteFaqs();

  const {
    makeRequest: editFaq,
    isLoading: isEditingFaq,
    success: editFaqSuccessfully,
    errorMessage: editFaqErrorMessage,
    setErrorMessage: setEditFaqErrorMessage,
    data: editFaqData,
  } = editFaqs();

  const { makeRequest, isLoading, success, errorMessage, setErrorMessage } =
    postFaqs();

  useEffect(() => {
    getAllFaqs({ url: "/faqs/" });
  }, []);

  useEffect(() => {
    if (editFaqSuccessfully) {
      setTimeout(() => {
        getAllFaqs({ url: "/faqs/" });

        setQuestion("");
        setAnswer("");
      }, 0);
    }
  }, [editFaqSuccessfully]);

  useEffect(() => {
    if (deletedFaqSuccessfully) getAllFaqs({ url: "/faqs/" });
  }, [deletedFaqSuccessfully]);

  useEffect(() => {
    setQuestion("");
    setAnswer("");
    setShowForm(false);

    getAllFaqs({ url: "/faqs/" });
  }, [success]);

  const handleClick = (id) =>
    currentFaqId === id ? setCurrentFaqId(null) : setCurrentFaqId(id);

  const handleSubmit = (e, showFormAction) => {
    e.preventDefault();

    if (!question || !answer) {
      setErrorMessage("Fields can't be empty");
      return;
    }

    if (showFormAction === "add") {
      makeRequest({
        url: "/faqs/",
        method: "POST",
        payload: { question, answer },
      });
    } else {
      editFaq({
        url: `/faqs/${toEditId}/`,
        method: "PATCH",
        payload: { question, answer },
      });

      setShowForm(false);
    }
  };

  useEffect(() => {
    if (isPositive === "yes") {
      deletelFaq({
        url: `/faqs/${toDeleteId}`,
        method: "DELETE",
        payload: { id: toDeleteId },
      });
    }
    setShowAlert(false);
    setToDeleteId(null);
    setIsPositive(null);
  }, [isPositive]);

  useEffect(() => {
    setErrorMessage("");
  }, [question, answer]);

  const handleNext = () => {
    const newPage = currentPage + 1;

    setCurrentPage(newPage);
    setSearchParams({ page: newPage });
    getAllFaqs({ url: getFaqData.next });
  };

  const handleBack = () => {
    const newPage = currentPage - 1;

    setCurrentPage(newPage);
    if (newPage === 1) setSearchParams({});
    else setSearchParams({ page: newPage });
    getAllFaqs({ url: getFaqData.previous });
  };

  if (isGettingFaqs || deletingFaq || isEditingFaq) return <LoadingIndicator />;
  if (getFaqsErrorMessage)
    return <ErrorIndicator error={getFaqsErrorMessage} />;
  if (deleteFaqErrorMessage)
    return <ErrorIndicator error={deleteFaqErrorMessage} />;
  if (editFaqErrorMessage)
    return <ErrorIndicator error={editFaqErrorMessage} />;

  return (
    gotFaqsSuccessfully && (
      <div className="flex flex-col bg-[#fff] rounded-[30px] pb-[41px] h-[100%]">
        <div className="relative flex justify-between items-center">
          <WrapperHeader title="FAQ" />
          <button
            className="flex items-center gap-[9px] bg-[#02378B] rounded-[19px] text-[#fff] px-[20px] py-[1px] mr-[20px] text-[10px] font-[700] leading-6"
            onClick={() => {
              setShowForm(!showForm);
              setShowFormAction("add");
              setQuestion("");
              setAnswer("");
            }}
          >
            <img src={add} alt="add icon" />
            <span> ADD FAQ</span>
          </button>

          <div
            className={`absolute top-[50%] left-[50%] flex-col items-center rounded-[48px] w-[440px] bg-[#F5F5F5] px-[36px] py-[26px] max-w-[90%] translate-x-[-50%] ${
              showForm ? "flex" : "hidden"
            }`}
          >
            <div className="text-[16px] font-[700] leading-[20px] text-[#000] mb-[44px] text-center">
              {showFormAction === "add" ? "ADD FAQ" : "EDIT FAQ"}
            </div>
            <form
              className="w-[100%]"
              onSubmit={(e) => handleSubmit(e, showFormAction)}
            >
              <div className="flex flex-col mb-[36px]">
                <label className="text-[14px] font-[600] leading-[18px] text-[#000]  mb-[5px] mx-[11px]">
                  Question
                </label>
                <input
                  className="text-[14px] font-[400] leading-[18px] text-[#000] h-[44px] px-[27px] py-[13px] rounded-[22px] outline-none border-[1px] border-solid border-[#D9D9D9]"
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-[44px]">
                <label className="text-[14px] font-[600] leading-[18px] text-[#000] mb-[5px] mx-[11px]">
                  Answer
                </label>
                <textarea
                  className="text-[14px] font-[400] leading-[18px] text-[#000] rounded-[22px] px-[27px] py-[20px] h-[170px] outline-none border-[1px] border-solid border-[#D9D9D9]"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                ></textarea>
              </div>
              <p className="mt-[-38px] mb-[10px] text-center text-[16px] font-[700] text-[#d32518] leading-6">
                {errorMessage && errorMessage}
              </p>

              <div className="text-center">
                <button className="text-[12px] font-[700] leading-6 text-[#fff] rounded-[19px] px-[36px] py-[4px] bg-[#02378B]">
                  {isLoading || deletingFaq ? "POSTING" : "POST"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-[23px] px-[80px] grow">
          {getFaqData.results.map((faq, index) => (
            <div key={index}>
              <div className="flex justify-between gap-[40px] items-center py-[5px]">
                <h2
                  onClick={() => handleClick(faq.id)}
                  className="grow text-[14px] font-[700] leading-[18px] text-[#000] text-start cursor-pointer"
                >
                  {faq.question}
                </h2>
                <div className="flex items-center">
                  <div className="flex items-center gap-[15px] mr-[40px]">
                    <p
                      className="text-[#333] px-[10px] py-[1px] text-[14px] font-[700] leading-6 cursor-pointer"
                      onClick={() => {
                        setShowForm(!showForm);
                        setShowFormAction("edit");
                        setToEditId(faq.id);
                        setQuestion(faq.question);
                        setAnswer(faq.answer);
                      }}
                    >
                      Edit
                    </p>
                    <p
                      className="text-[#C90415] px-[10px] py-[1px] text-[14px] font-[700] leading-6 cursor-pointer"
                      onClick={() => {
                        setShowAlert(true);
                        setToDeleteId(faq.id);
                        setShowForm(false);
                      }}
                    >
                      Delete
                    </p>
                  </div>

                  <div
                    className="p-[10px] cursor-pointer"
                    onClick={() => handleClick(faq.id)}
                  >
                    <img
                      src={currentFaqId === faq.id ? close : open}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>

              {faq.id === currentFaqId && (
                <div
                  className="grid gap-[13px] mt-[9px]"
                  style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
                  }}
                >
                  <p className="text-[14px] font-[400] leading-[18px] text-[#000] mb-[-18px] px-[22px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-[80px] mt-[auto] pt-[40px]">
          <button
            onClick={handleBack}
            className={`text-[#303030] text-[12px] font-[700] leading-6 bg-[#E6E6E6] rounded-[14px] px-[30px] py-[3px] tracking-[-0.006em] ${
              getFaqData.previous ? "cursor-pointer" : " cursor-not-allowed"
            }`}
            disabled={!getFaqData.previous}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className={`text-[#fff] text-[12px] font-[700] leading-6 bg-[#02378B] rounded-[14px] px-[30px] py-[3px] tracking-[-0.006em] ${
              getFaqData.next ? "cursor-pointer" : " cursor-not-allowed"
            }`}
            disabled={!getFaqData.next}
          >
            Next
          </button>
        </div>

        {showAlert && (
          <div className="fixed top-[0] right-[0] bottom-[0] left-[255px] flex justify-center items-center bg-[#918a8a61]">
            <div>
              <Alert
                title="DELETE"
                text={
                  "Are you sure you want to delete this faq?, it can't be reversed?"
                }
                setIsPositive={setIsPositive}
              />
            </div>
          </div>
        )}
      </div>
    )
  );
};
