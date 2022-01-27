export default function CardInner(props) {
  const shuffle = (opt) => {
    console.log(opt);
    let i = 0;
    let j = 0;
    let temp = 0;

    for (i = opt.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = opt[i];
      opt[i] = opt[j];
      opt[j] = temp;
    }
    // const separatedOptions = {
    //   optionOne: opt[0],
    //   optionTwo: opt[1],
    //   optionThree: opt[2],
    //   optionFour: opt[3],
    // };
    // console.log(separatedOptions);
  };
  console.log(shuffle(props.options));

  console.log(props.options[2]);
  return (
    <div className="container_question">
      <h2 className="container_question_text">{props.categoryQuestion}</h2>
      <div className="container_question_answers">
        {props.options.map((el, index) => {
          return (
            <p
              key={index}
              className={`container_question_answers_option ${
                el === undefined && "none"
              }`}
              options={el}
            >
              {el}
            </p>
          );
        })}

        {/* <p
          className={`container_question_answers_option ${
            props.options[0] === undefined && "none"
          }`}
          options={props.options[0]}
        >
          {props.options[0]}
        </p>
        <p
          className={`container_question_answers_option ${
            props.options[1] === undefined && "none"
          }`}
          options={props.options[1]}
        >
          {props.options[1]}
        </p>
        <p
          className={`container_question_answers_option ${
            props.options[2] === undefined && "none"
          }`}
          options={props.options[2]}
        >
          {props.options[2]}
        </p>
        <p
          className={`container_question_answers_option ${
            props.options[3] === undefined && "none"
          }`}
          options={props.options[3]}
        >
          {props.options[3]}
        </p> */}
      </div>
    </div>
  );
}
