import './Intro.scss'

export default function intro() {


    const intro_alt_1 = ['S', 'T', 'B', 'R', 'E', 'N']

    return (
        <div className="intro_main">
            <div className="intro_title_box">
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter1">
                        M
                    </span>
                    {intro_alt_1.map((letter) => (
                        <span className="intro_title_box_letter_alternate">
                            {letter}
                        </span>
                    ))}

                </div>

                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        A
                    </span>
                    <span className="intro_title_box_letter_alternate2">
                        M
                    </span>
                    <span className="intro_title_box_letter_alternate2">
                        J
                    </span>
                    <span className="intro_title_box_letter_alternate2">
                        P
                    </span>
                </div>
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        D
                    </span>
                </div>  <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        E
                    </span>
                </div>
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        L
                    </span>
                </div>
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        U
                    </span>
                </div>
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        S
                    </span>
                </div>
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        I
                    </span>
                </div>
                <div className='intro_title_box_Box'>
                    <span className="intro_title_box_letter">
                        V
                    </span>
                </div>
            </div>



        </div>

    )
}