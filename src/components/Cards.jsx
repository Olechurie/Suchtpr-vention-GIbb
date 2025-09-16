import React from "react";

function Cards() {
  let contentArray = [
    { title: "Header", content: "dwdowapiodjwapdoifaw" },
    {
      title: "Again Header",
      content: "ifmqweifhnweoipfnhweoifjiweoifjwepofijwe",
    },
  ];

  return (
    <div>
      {applicants.map(function (data) {
        return <div>Applicant name: {data.name}</div>;
      })}
      <div>
        Informationen über <p>Alkoholkonsum</p>, Risiken und
        Präventionsstrategien.
      </div>
    </div>
  );
}

export default Cards;
