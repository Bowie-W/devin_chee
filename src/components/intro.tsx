import "./Intro.scss";

export default function intro() {
  const intro_alt_1 = ["a", "t", "y", "w", "o", "n"];
  const intro_alt_2 = ["c", "e", "i", "x", "f", "u"];
  const intro_alt_3 = ["g", "f", "o", "p", "l", "s"];
  const intro_alt_4 = ["l", "h", "k", "n", "k", "r"];
  const intro_alt_5 = ["r", "p", "j", "r", "q", "e"];
  const intro_alt_6 = ["u", "r", "h", "s", "r", "p"];
  const intro_alt_7 = ["x", "s", "g", "y", "t", "j"];
  const intro_alt_8 = ["z", "q", "c", "a", "f", "y"];
  const intro_alt_9 = ["d", "a", "z", "b", "s", "u"];

  return (
    <div className="intro_main">
      <div className="intro_title_box">
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter1">m</span>
          {intro_alt_1.map((letter) => (
            <span className="intro_title_box_letter_alternate">{letter}</span>
          ))}
        </div>

        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter2">a</span>
          {intro_alt_2.map((letter) => (
            <span className="intro_title_box_letter_alternate2">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter3">d</span>
          {intro_alt_3.map((letter) => (
            <span className="intro_title_box_letter_alternate3">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter4">e</span>
          {intro_alt_4.map((letter) => (
            <span className="intro_title_box_letter_alternate4">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter5">l</span>
          {intro_alt_5.map((letter) => (
            <span className="intro_title_box_letter_alternate5">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter6">u</span>
          {intro_alt_6.map((letter) => (
            <span className="intro_title_box_letter_alternate6">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter7">s</span>
          {intro_alt_7.map((letter) => (
            <span className="intro_title_box_letter_alternate7">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter8">i</span>
          {intro_alt_8.map((letter) => (
            <span className="intro_title_box_letter_alternate8">{letter}</span>
          ))}
        </div>
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter9">v</span>
          {intro_alt_9.map((letter) => (
            <span className="intro_title_box_letter_alternate9">{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
