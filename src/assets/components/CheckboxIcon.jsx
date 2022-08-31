export const CheckboxIcon = ({ isChecked }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.91667 0.75H3.08333C1.79467 0.75 0.75 1.79467 0.75 3.08333V8.91667C0.75 10.2053 1.79467 11.25 3.08333 11.25H8.91667C10.2053 11.25 11.25 10.2053 11.25 8.91667V3.08333C11.25 1.79467 10.2053 0.75 8.91667 0.75Z"
        stroke="#02378B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {isChecked && (
        <path
          d="M4.25 6.00001L5.5625 7.16668L7.75 4.83334"
          stroke="#02378B"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};
