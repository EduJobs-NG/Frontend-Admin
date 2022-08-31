import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { WrapperHeader } from "../components/WrapperHeader";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { ErrorIndicator } from "../components/ErrorIndicator";

import add from "../assets/add.svg";
import close from "../assets/close.svg";
import open from "../assets/open.svg";

export const FAQ = () => {
  const [currentFaqId, setCurrentFaqId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const getFaqs = useAxios();
  const postFaqs = useAxios();

  const {
    makeRequest: getAllFaqs,
    isLoading: isGettingFaqs,
    success: gotFaqsSuccessfully,
    errorMessage: getFaqsErrorMessage,
    setErrorMessage: setGetFaqsErrorMessage,
    data: getFaqData,
  } = getFaqs();

  const { makeRequest, isLoading, success, errorMessage, setErrorMessage } =
    postFaqs();

  useEffect(() => {
    getAllFaqs({ url: "/faqs/" });
  }, []);

  useEffect(() => {
    setQuestion("");
    setAnswer("");
    setShowForm(false);

    getAllFaqs({ url: "/faqs/" });
  }, [success]);

  const handleClick = (id) =>
    currentFaqId === id ? setCurrentFaqId(null) : setCurrentFaqId(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question || !answer) {
      setErrorMessage("Fields can't be empty");
      return;
    }

    makeRequest({
      url: "/faqs/",
      method: "POST",
      payload: { question, answer },
    });
  };

  if (isGettingFaqs) return <LoadingIndicator />;
  if (getFaqsErrorMessage)
    return <ErrorIndicator error={getFaqsErrorMessage} />;

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

  return (
    gotFaqsSuccessfully && (
      <div className="flex flex-col bg-[#fff] rounded-[30px] pb-[41px] h-[100%]">
        <div className="relative flex justify-between items-center">
          <WrapperHeader title="FAQ" />
          <button
            className="flex items-center gap-[9px] bg-[#02378B] rounded-[19px] text-[#fff] px-[20px] py-[1px] mr-[20px] text-[10px] font-[700] leading-6"
            onClick={() => setShowForm(!showForm)}
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
              ADD FAQ
            </div>
            <form className="w-[100%]" onSubmit={(e) => handleSubmit(e)}>
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
                  {isLoading ? "POSTING" : "POST"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-[23px] px-[80px] grow">
          {getFaqData.results.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => handleClick(faq.id)}
                className="flex justify-between items-center py-[5px] cursor-pointer"
              >
                <h2 className="text-[14px] font-[700] leading-[18px] text-[#000] text-start">
                  {faq.question}
                </h2>
                <img src={currentFaqId === faq.id ? close : open} alt="icon" />
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

        <div className="flex justify-between items-center px-[80px] mt-[40px] mt-[auto]">
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
      </div>
    )
  );
};
