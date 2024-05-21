// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		const shadow = this.attachShadow({ mode: 'open' });
		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		const article = document.createElement('article');
		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		const style = document.createElement('style');
		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		style.textContent = `
			article {
				border: 1px solid #ccc;
				padding: 16px;
				border-radius: 8px;
			}
			img {
				width: 100%;
			}
			h2 {
				font-size: 1.5em;
				margin: 0;
			}
			p {
				margin: 0.5em 0;
			}
		`;
		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
		shadow.appendChild(style);
    	shadow.appendChild(article);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		const article = this.shadowRoot.querySelector('article');
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<h2><a href="${data.titleLnk}">${data.titleTxt}</a></h2>
			<p><strong>Organization:</strong> ${data.organization}</p>
			<p><strong>Rating:</strong> ${data.rating}</p>
			<p><strong>Time:</strong> ${data.lengthTime}</p>
			<p><strong>Ingredients:</strong> ${data.ingredients}</p>
		`;
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
