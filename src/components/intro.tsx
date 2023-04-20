import "../styles/Intro.scss";

export default function intro() : JSX.Element {
  const intro_alt_1 : string[] = ["a", "t", "y", "w", "o", "n", "x"];
  const intro_alt_2 : string[] = ["c", "e", "i", "x", "f", "u","s", "r"];
  const intro_alt_3 : string[] = ["g", "f", "o"];
  const intro_alt_4 : string[] = ["l", "h", "k", "n", "k", "r", "d", "a", "z", "b"];
  const intro_alt_5 : string[] = ["r", "p", "j"];
  const intro_alt_6 : string[] = ["u", "r", "h", "s", "r"];
  const intro_alt_7 : string[] = ["x", "s", "g", "y", "t", "j", "c", "e", "i", "x", "f", "u"];
  const intro_alt_8 : string[] = ["z", "q", "c", "a", "f", "y"];
  const intro_alt_9 : string[] = ["d", "a", "z", "b", "s", "u", "l"];
  

  return (
    <div className="intro_main">
      <div className="intro_title_box">
        <div className="intro_title_box_letterBox">
          <span className="intro_title_box_letter1">M</span>
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
