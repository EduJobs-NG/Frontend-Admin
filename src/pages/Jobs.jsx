import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useAxios from "../hooks/useAxios";
import { WrapperHeader } from "../components/WrapperHeader";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { ErrorIndicator } from "../components/ErrorIndicator";

import add from "../assets/add.svg";
import hide from "../assets/hide.svg";
import show from "../assets/show.svg";

export const Jobs = () => {
  const navigate = useNavigate();

  // const getJobs = useAxios();
  // const { makeRequest, isLoading, errorMessage, success, data } = getJobs();

  // const [jobs, setJobs] = useState(null);
  const [jobInView, setJobInView] = useState(null);
  const [jobState, setJobState] = useState([
    {
      state: "Approved",
      icon: hide,
      jobs: [
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
    {
      state: "Pending",
      icon: hide,
      jobs: [
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
    {
      state: "Declined",
      icon: hide,
      jobs: [
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
    {
      state: "Reported",
      icon: hide,
      jobs: [
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
  ]);

  // useEffect(() => makeRequest({ url: "/jobs-review" }), []);

  const handleClick = (state) => {
    const newJobState = jobState.map((jobState) => {
      if (jobState.state !== state) {
        jobState.icon = hide;
        return jobState;
      }

      if (jobState.icon === hide) {
        jobState.icon = show;
        return jobState;
      }

      jobState.icon = hide;
      return jobState;
    });

    setJobState(newJobState);
  };

  // if (isLoading) return <LoadingIndicator />;
  // if (errorMessage) return <ErrorIndicator error={errorMessage} />;

  return (
    // success &&
    <div className="bg-[#fff] rounded-[30px] pb-[41px] h-[100%]">
      <div className="flex justify-between items-center">
        <WrapperHeader title="Jobs Posted" />
        <button
          onClick={() => navigate("post-jobs")}
          className="flex items-center gap-[9px] bg-[#02378B] rounded-[19px] text-[#fff] mr-[20px] px-[20px] py-[1px] text-[10px] font-[700] leading-6"
        >
          <img src={add} alt="add icon" />
          <span> ADD JOB</span>
        </button>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-[15px] pl-[28px] pr-[20px] grow">
          {jobState.map((jobState) => (
            <div key={jobState.state}>
              <button
                onClick={() => handleClick(jobState.state)}
                className="flex items-center gap-[18px] ml-[23px]"
              >
                <span className="text-[#000] text-[10px] font-[700] leading-[13px] w-[70px] text-start">
                  {jobState.state}
                </span>
                <img src={jobState.icon} alt="icon" />
              </button>

              {jobState.icon === show && (
                <div
                  className="grid gap-[13px] mt-[13px]"
                  style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
                  }}
                >
                  {jobState.jobs.map((job, index) => (
                    <div
                      key={index}
                      className="flex flex-col pt-[11px] pb-[17px] px-[11px] rounded-[20px] border-[1px] border-solid border-[#CCCCCC] items-start"
                    >
                      <div
                        className={`text-[8px] font-[700] leading-[10px] rounding-[4px] mb-[4px] px-[10px] py-[5px] ${
                          job.status === "Approved"
                            ? "text-[#00944D] bg-[#B5FFDB]"
                            : "text-[FFB800] bg-[#FFE298]"
                        }`}
                      >
                        {job.status}
                      </div>
                      <div className="text-[#02378B] text-[14px] font-[700] leading-[18px]">
                        {job.title}
                      </div>
                      <div className="text-[#606060] text-[10px] font-[700] leading-[13px] mb-[6px]">
                        {job.company}
                      </div>
                      <div className="text-[#606060] text-[8px] font-[400] leading-[10px] mb-[12px]">
                        {job.text}
                      </div>
                      <button
                        onClick={() => setJobInView(job)}
                        className="text-[#f0f0f0] text-[8px] font-[700] leading-[10px] rounding-[4px] px-[32px] py-[4px] bg-[#02378B] self-center"
                      >
                        View Job
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {jobInView && (
          <div className="rounded-[21px] px-[14px] py-[20px] mr-[20px] border-[1px] border-solid border-[#D9D9D9] max-w-[250px]">
            <div className="text-[#02378B] text-[14px] font-[700] leading-[18px]">
              {jobInView.title}
            </div>
            <div className="text-[#606060] text-[10px] font-[700] leading-[13px] mb-[10.5px]">
              {jobInView.company}
            </div>

            <div className="mb-[3.5px] bg-[#606060] h-[0.5px]"></div>

            <div className="mb-[4px]">
              <div className="text-[#000] text-[10px] font-[700] leading-[13px] mb-[3px]">
                About
              </div>
              <p className="text-[#606060] text-[8px] font-[400] leading-[10px]">
                {jobInView.about}
              </p>
            </div>

            <div className="mb-[6px] bg-[#606060] h-[0.5px]"></div>

            <div>
              <div className="text-[#000] text-[10px] font-[700] leading-[13px] mb-[3px]">
                Qualifications
              </div>

              <ol type="1">
                {jobInView.qualifications.map((qualification, index) => (
                  <li
                    key={index}
                    className="text-[#606060] text-[8px] font-[400] leading-[10px] ml-[10px] list-decimal"
                  >
                    {qualification}
                  </li>
                ))}
              </ol>
            </div>
            {jobInView.status === "Pending" && (
              <div className="flex flex-col gap-[4px] text-[#fff] mt-[25px] text-[8px] font-[700] leading-[10px]">
                <button className="p-[6px] rounded-[4px] bg-[#00944D] border-[1.5px] border-solid border-[#00944D]">
                  Approve
                </button>
                <button className="p-[6px] rounded-[4px] text-[#C90415]  border-[1.5px] border-solid border-[#C90415]">
                  Decline
                </button>
              </div>
            )}

            {jobInView.status === "Reported" && (
              <div className="flex flex-col gap-[4px] text-[#fff] mt-[25px] text-[8px] font-[700] leading-[10px]">
                <button className="bg-[#C90415] rounded-[4px] p-[7px]">
                  Delete
                </button>
                <button className="text-[#303030] bg-[#e6e6e6] p-[7px] rounded-[4px]">
                  Ignore
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
