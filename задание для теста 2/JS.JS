
document.addEventListener('DOMContentLoaded', function () {
	

	const cardWraper = document.querySelector(".cards")
	const costSelector = document.querySelector(".select-box-cost");
	const materialSelector = document.querySelector(".select-box-material");

	

		const btn_function = () => {

			const btns = document.querySelectorAll('.btn');
			
			btns.forEach(function (btn) {
				btn.addEventListener("click", function (event) {
					if (btn.style.color === "red") {
						btn.querySelector('i').classList.replace('fas', 'far')
						btn.style.color = "black";
						
					}
					else {
						btn.querySelector('i').classList.replace('far', 'fas')
						btn.style.color = "red";
						
					}
				});
			});
		}

		
	

	let products = [
		{
			id: 0,
			discount: "скидка",
			img: "товар1.png",
			name: "ручка дверная",
			model: "L422WH",
			old_price: 400,
			price: 35,
			interactiv_img1: "icon1.png", 
			material: "steel",
		},

		{
			id: 1,
			discount: "скидка",
			img: "товар1.png",
			name: "ручка дверная",
			model: "L422WH",
			old_price: 400,
			price: 355,
			interactiv_img1: "icon2.png",
			material: "aluminum",
		},

		{
			id: 2,
			img: "товар2.png",
			name: "Ручка, нержавеющая сталь",
			old_price: 136,
			price: 99,
			material: "steel",
		},

		{
			id: 3,
			img: "товар3.png",
			name: "стандартные петли",
			price: 75,
			material: "steel",
		},

		{
			id: 4,
			img: "товар4.png",
			name: "петля со стопором",
			old_price: 270,
			price: 200,
			material: "aluminum",
		},

		{
			id: 5,
			img: "товар1.png",
			name: "ручка дверная",
			old_price: 500,
			price: 450,
			material: "aluminum",
		},

		{
			id: 6,
			img: "товар3.png",
			name: "стандартные петли",
			price: 89,
			material: "steel",
		},

		{
			id: 7,
			img: "товар2.png",
			name: "Ручка, нержавеющая сталь",
			old_price: 300,
			price: 150,
			material: "aluminum",
		},

		{
			id: 8,
			img: "товар3.png",
			name: "стандартные петли",
			price: 180,
			material: "steel"
		},

		{
			id: 9,
			img: "товар4.png",
			name: "петля со стопором",
			price: 232,
			material: "aluminum",

		},

		{
			id: 10,
			img: "товар3.png",
			name: "стандартные петли",
			price: 4,
			material: "aluminum",

		},

		{
			id: 11,
			img: "товар1.png",
			name: "ручка дверная",
			old_price: 25,
			price: 7,
			material: "steel",
		}

	]

	

	const render = (array) => {

		cardWraper.innerHTML = "";

		array.forEach((item) => {

			

			if ("discount" in item){
				

				cardWraper.insertAdjacentHTML("beforeend",`
					<div class = "product-card">
						<p class = "discount">${item.discount}</p>
						
						<div class = "product-card__img-conteiner">
							<img src="${item.img}" alt="товар1" class = "product-card__img"></img>
						</div>
						
						<div class = "product-card__discription">
							<p class = "product-card__model">${item.model}</p>
							
							<p class = "product-card__name">${item.name}</p>
							
							<div class = "product-card__group">
								<div class = "product-card__cost">
									<p class = "product-card__old-cost">${item.old_price}₽</p>
									
									<p class = "product-card__cost">${item.price}₽</p>
								</div>
							
								<div class = "product-card__interactiv">
									<img src="icon1.png" alt="icon1" class = "clickable-icon">
									
									<button class="btn"><i class="far fa-heart"></i></button>
								</div>
							</div>
						</div>
					</div>
				`)

				
				
				
				
			}
			else{
				
				

				if ("old_price" in item){

					cardWraper.insertAdjacentHTML("beforeend",`
						<div class = "product-card">
							
							
							<div class = "product-card__img-conteiner">
								<img src="${item.img}" alt="товар1" class = "product-card__img"></img>
							</div>
							
							<div class = "product-card__discription">
								
								
								<p class = "product-card__name">${item.name}</p>
								
								<div class = "product-card__group">
									<div class = "product-card__cost">
										<p class = "product-card__old-cost">${item.old_price}₽</p>
										
										<p class = "product-card__cost">${item.price}₽</p>
									</div>
								
									<div class = "product-card__interactiv">
										
										
										<button class="btn"><i class="far fa-heart"></i></button>
									</div>
								</div>
							</div>
						</div>
					`)
					 

				}
				else{
					cardWraper.insertAdjacentHTML("beforeend",`
						<div class = "product-card">
							
							
							<div class = "product-card__img-conteiner">
								<img src="${item.img}" alt="товар1" class = "product-card__img"></img>
							</div>
							
							<div class = "product-card__discription">
								
								
								<p class = "product-card__name">${item.name}</p>
								
								<div class = "product-card__group">
									<div class = "product-card__cost">
										
										
										<p class = "product-card__cost">${item.price}₽</p>
									</div>
								
									<div class = "product-card__interactiv">
										
										
										<button class="btn"><i class="far fa-heart"></i></button>
									</div>
								</div>
							</div>
						</div>
					`)
					 
				}

				
			}
			
				
		})
			
	}
	

	render(products)
	
	btn_function()

	costSelector.addEventListener("change", function () {

		

		if(costSelector.value == "ascending"){
			products.forEach((item) => {
				
				
				products.sort((a,b) => a.price - b.price)
				
				
				
			})
			
			render(products)
			btn_function()
		}
		else if(costSelector.value == "descending"){
			products.forEach((item) => {
				 

				products.sort((a,b) => b.price - a.price)
				
				
			})
			render(products)
			btn_function()
		}
		else{
			
			render(resorted)
			btn_function()
			console.log(products)
		}
	})
	
	materialSelector.addEventListener("change", function(){

		render(products.filter((item) => {
			return item.material.includes(materialSelector.value)
		}));
		
		btn_function()
	})
	

	

		
	

});