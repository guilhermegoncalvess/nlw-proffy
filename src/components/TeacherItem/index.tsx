import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

const TeacherItem = () => {
	return (
		<article className="teacher-item">
			<header>
                <img src="https://www.filarmonica.art.br/wp-content/uploads/2017/08/2017-site-blog-bach.jpg" 
                    alt="Johann Sebastian Bach"
                    />

				<div>
					<strong>Johann Sebastian Bach</strong>
					<span>Compositor</span>
				</div>
			</header>

			<p>
                Enfermeiro por paixão.
				<br />
				<br />
				Tocando piano em uma outra dimensão.
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$80,00</strong>
				</p>

				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp"/>
					Entre em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem