import React from "react";
import Navbar from "../Navbar/Navbar";
import "./QuizPage.scss";
import { decode } from "html-entities";
import { Box } from "@mui/system";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate, useParams } from "react-router-dom";

const QuizPage = () => {
  const [allOptions, setAllOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState();
  const [err, setErr] = useState("");

  const { category } = useParams();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20} sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <div className="quizpage">
      <Navbar quizPage={true} />

      <div className="category-score container mt-5">
        <div className="category">
          <h2>Topic : {category}</h2>
        </div>

        <div>
          <h2>
            Score : {total_score}/{"" + question_amount}
          </h2>
        </div>
      </div>

      <div className="text-center mt-4">
        <h4>
          {index + 1 + " "}
          {decode(response.results[index].question)}
        </h4>
      </div>

      <div className="d-flex justify-content-center">
        <hr className="w-75" style={{ color: "red" }} />
      </div>

      <div className="text-center mt-2">
        <h4 style={{ color: "red" }}>{err}</h4>
      </div>

      <div className="row text-center d-flex justify-content-center">
        {allOptions.map((option, i) => (
          <button
            className={`undone col-lg-5 col-sm-10 m-4 optionBtn py-2 ${
              selected ? "inactive" : ""
            }`}
            key={i}
            value={i}
            onClock={handleCorrect}
            disabled={selected}
          >
            {decode(option)}
          </button>
        ))}
      </div>

      <div className="quit-next container mt-3">
        <div>
          <button onClick={handleQuit} className="px-5 py-lg-3 quitBtn">
            Quit Quiz
          </button>
        </div>
        <div>
          <button onClick={handleNext} className="px-5 py-lg-3 nextBtn">
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
