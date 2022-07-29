import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const CommentSection = () => {
  return (
    <>
      <HighlightedQuote />
      <Routes>
        <Route
          path="/"
          element={
            <div className="centered">
              <Link to="comments" className="btn--flat">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default CommentSection;
