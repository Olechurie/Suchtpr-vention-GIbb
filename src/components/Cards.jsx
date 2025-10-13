import React from "react";
import "../styles/Cards.css";
import contentArray from "./config/CardsContentArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "./iconMap";
import { useNavigate } from "react-router-dom";

function Cards() {
  const [site, setSite] = React.useState(0); // Start bei 0
  const cardsPerPage = 15;

  const navigate = useNavigate();
  function handleCardClick(title) {
    navigate("/page?tab=" + title);
  }

  function handleNextClick() {
    if ((site + 1) * cardsPerPage < contentArray.length) {
      setSite(site + 1);
    }
  }

  function handlePrevClick() {
    if (site > 0) {
      setSite(site - 1);
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {contentArray.map((data, index) => {
          if (
            index < site * cardsPerPage ||
            index >= (site + 1) * cardsPerPage
          ) {
            return null;
          }
          const iconKey = data.iconSvg.replace("fa-", "");
          const icon = iconMap[iconKey];

          return (
            <div
              key={index}
              className="card hover:bg-[#3a404e]"
              onClick={() => handleCardClick(data.title)}
            >
              <div className="card-head">
                {icon && (
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    className="card-head-icon mb-2"
                    style={{
                      color: index % 2 === 0 ? "#00b8d9ff" : "#5cb85cff",
                    }}
                  />
                )}

                <h3 className="card-head-title mb-5">{data.title}</h3>
              </div>
              <div className="text-neutral-400">{data.content}</div>
            </div>
          );
        })}
      </div>
      <div class="mx-10 mt-10 mb-10 flex justify-center items-center gap-4">
        <button
          onClick={handlePrevClick}
          type="button"
          class=" bg-  focus:ring-2 focus:outline-none focus:ring-[#4DCDE4]"
        >
          <svg
            className=" w-3.5 h-3.5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>

        <button
          onClick={handlePrevClick}
          class="group relative cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-md bg-[#009CB8] hover:bg-[#00788D]  text-sm text-neutral-200 rounded-lg  text-center inline-flex items-center  font-medium  px-2 py-2.5 pr-5"
        >
          <div class="text-white w-0 me-3 ms-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-4 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="rotate-180 h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span>Previous page</span>
        </button>
        <button
          onClick={handleNextClick}
          class="group cursor-pointer relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#009CB8] hover:bg-[#00788D] text-sm text-neutral-200 rounded-lg  text-center inline-flex items-center  font-medium  px-2 py-2.5 pl-5"
        >
          <span>Next Page</span>
          <div class="text-white w-0 me-3 ms-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}

export default Cards;
