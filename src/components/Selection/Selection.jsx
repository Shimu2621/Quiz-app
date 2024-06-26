import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Selection.scss";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const [error2, setError2] = useState("");
  const { category, apiVal } = useParams();

  const navigate = useNavigate();

  const handleStart = () => {
    if (user_name) {
      navigate(`/quizPage/${category}`);
    } else {
      setError2("Name And Amount Below 20 Are Required");
    }
  };

  const { loading } = useFetch({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20} sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const handleChangeName = () => {};

  return (
    <div className="selection-container">
      <Navbar getStarted={false} />

      <div className="selection-items">
        <div className="text-center mt-5 error2-container">
          <h4 className="error2" style={{ color: "red" }}>
            {error2}
          </h4>
        </div>
        <form action="">
          <div>
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              id="name"
              className="form-control py-3 px-4 nameInput"
              type="text"
              placeholder="Enter Your Name"
              value={user_name}
              onChange={(e) => dispatch(handleChangeName(e.target.value))}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="category" className="form-label">
              Your Category
            </label>
            <select
              id="category"
              className="form-select"
              aria-label="Default select example"
              onChange={handleCategory}
            >
              {/* {response.trivia_categories.map(result => <option value={result.id}>{result.name}</option>)} */}
              <option value={category}>{category}</option>
            </select>
          </div>

          <div className="mt-3">
            <label htmlFor="difficulty" className="form-label">
              Choose Difficulty
            </label>
            <select
              id="difficulty"
              className="form-select"
              onChange={handleDifficulty}
            >
              {difficultyOptions.map((option, id) => (
                <option value={option.id} key={id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3">
            <label htmlFor="amount" className="form-label">
              Amount Of Questions
            </label>
            <input
              id="amount"
              className="form-control py-3 px-4 nameInput"
              min="1"
              max="20"
              type="number"
              placeholder="Enter Amount"
              value={question_amount}
              onChange={handleAmount}
            />
          </div>

          <div className="mt-4">
            <input
              className={`w-100 py-3 startBtn`}
              type="button"
              value="Start Quiz"
              onClick={handleStart}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Selection;
