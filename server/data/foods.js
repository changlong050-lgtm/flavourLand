const foodData = [
  {
    id: 1,
    name: "Hot Pot",
    description: "A communal Chinese dish where you cook fresh ingredients in a simmering broth at the table",
    recipe: "Heat a flavorful broth in a hot pot (chicken, beef, or vegetable-based), then add thinly sliced meat, fresh vegetables like bok choy and mushrooms, noodles, and tofu. Each diner picks ingredients and cooks them in the broth at the table, then dips in sauces like sesame or chili oil before eating.",
    country: "China",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiUtFev8Mk6Z-bTEAhx6PMI8V1y13sSU97g&s"
  },
  {
    id: 2,
    name: "Pad Thai",
    description: "Stir-fried rice noodles with eggs, tofu, shrimp, and peanuts with a tangy lime flavor",
    recipe: "Soak rice noodles in water, then stir-fry them in a hot wok with oil, garlic, and your choice of protein (shrimp or chicken). Add tamarind paste, fish sauce, and sugar for the signature sour-salty flavor. Toss in eggs, bean sprouts, and chopped peanuts. Serve with lime wedges and more crushed peanuts on top.",
    country: "Thailand",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwYrVcIr4VONXvVcy2wFeBtyH76UucAJ3og&s"
  },
  {
    id: 3,
    name: "Ceviche",
    description: "Fresh raw fish cured in citrus juices with onions, cilantro, and chili peppers",
    recipe: "Cut fresh, sushi-grade fish into bite-sized cubes and place in a bowl. Pour fresh lime or lemon juice over the fish until it's completely covered, and refrigerate for 15-30 minutes until the fish becomes opaque and 'cooked' by the acid. Mix in finely diced red onions, fresh cilantro, jalapeño, and avocado. Season with salt and pepper, and serve cold with crispy tortilla chips.",
    country: "Peru",
    imageUrl: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg"
  },
  {
    id: 4,
    name: "Paella",
    description: "Saffron-infused rice cooked with seafood, vegetables, and spices in a wide shallow pan",
    recipe: "Heat olive oil in a wide paella pan and sauté diced onions and garlic. Add short-grain rice (like bomba) and stir until lightly toasted. Pour in hot seafood or chicken broth infused with saffron threads and paprika. Let it simmer without stirring, allowing the rice to absorb the liquid and form a crispy bottom layer (socarrat). Add shrimp, mussels, bell peppers, and peas, then cook until the seafood is done and rice is tender.",
    country: "Spain",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHe9JK1ts9yJ5yeRGPzeKav11QWShhPwJlFA&s"
  },
  {
    id: 5,
    name: "Sushi",
    description: "Seasoned rice wrapped with fresh raw fish, vegetables, and seaweed in bite-sized rolls",
    recipe: "Cook sushi rice and season it with rice vinegar, sugar, and salt while still warm. Place a sheet of nori (seaweed) on a bamboo mat, spread a thin layer of rice on it, then arrange your fillings (raw fish, cucumber, avocado) in a line across the center. Roll tightly using the mat, then slice into bite-sized pieces with a sharp, wet knife. Serve with pickled ginger, wasabi, and soy sauce for dipping.",
    country: "Japan",
    imageUrl:"https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/64EF898D-2EDD-4B47-A456-E6A7D137AC91/Derivates/00f76cac-64f6-4573-be4f-e604a7d99143.jpg"
  },
  {
    id: 6,
    name: "Tacos",
    description: "Soft or hard tortillas filled with seasoned meat, lettuce, cheese, and fresh toppings",
    recipe: "Season ground beef or shredded chicken with chili powder, cumin, garlic, and onion, then cook until browned and fragrant. Warm soft corn or flour tortillas (or fry them for hard shells). Fill each tortilla with the seasoned meat, then top with shredded lettuce, diced tomatoes, shredded cheese, sour cream, and salsa. Garnish with fresh cilantro and lime, and serve immediately.",
    country: "Mexico",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskCR0-vqiWM4TZgN8VmYkvGoFRGXXGeFp5A&s"
  },
  {
    id: 7,
    name: "Pasta Carbonara",
    description: "Creamy pasta with eggs, bacon, and Pecorino cheese, a Roman classic",
    recipe: "Cook spaghetti or another pasta until al dente in salted boiling water. While the pasta cooks, fry diced guanciale (or bacon) until crispy. Whisk eggs with grated Pecorino Romano cheese to create a creamy mixture. Drain the pasta (reserve some pasta water), then immediately toss it with the hot bacon, off the heat. Pour the egg-cheese mixture over the hot pasta while stirring constantly—the heat will cook the eggs into a creamy sauce. Season with black pepper and serve immediately.",
    country: "Italy",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1w3AqIw9tXmWuAPVIpW-pinM279ffePwWQ&s"
  },
  {
    id: 8,
    name: "Falafel",
    description: "Deep-fried chickpea patties seasoned with herbs and spices, crispy outside and fluffy inside",
    recipe: "Soak dried chickpeas overnight, then drain and blend them with fresh parsley, cilantro, onions, and garlic. Add cumin, coriander, and cayenne pepper for spice, along with a touch of flour to help bind. Form the mixture into small balls or patties and refrigerate for at least 30 minutes. Deep-fry in hot oil until golden brown and crispy on the outside. Serve with tahini sauce, hummus, or yogurt, wrapped in warm pita bread with lettuce and tomatoes.",
    country: "Middle East",
    imageUrl:"https://www.aceitesdeolivadeespana.com/wp-content/uploads/2021/01/receta-falafel.jpg"
  },
  {
    id: 9,
    name: "Poutine",
    description: "Crispy french fries topped with gravy and squeaky cheese curds",
    recipe: "Cut potatoes into thick fries and deep-fry them twice—first at a lower temperature to cook through, then at higher heat to crisp up the outside and turn them golden brown. While the fries are still hot, pile them into a serving container and top immediately with hot beef or chicken gravy, followed by fresh cheese curds (which will slightly melt from the heat). The combination of crispy fries, creamy gravy, and squeaky cheese curds creates the perfect Quebec comfort food.",
    country: "Canada",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0jVmyiyj3J46x29K0KOyZnPK-F9xOcM9JQ&s"
  },
  {
    id: 10,
    name: "Biryani",
    description: "Fragrant basmati rice layered with marinated meat and aromatic spices",
    recipe: "Marinate chicken or mutton in yogurt with ginger-garlic paste, red chili powder, and turmeric for at least 2 hours. Parboil basmati rice with whole spices like cinnamon, cardamom, and bay leaves. In a heavy-bottomed pot, layer the marinated meat on the bottom, then top with the partially cooked rice. Sprinkle saffron soaked in milk over the rice, add fried onions, and dot with ghee. Cover the pot tightly with foil and a lid (dum pukht method), then cook on high heat for 2-3 minutes until steam forms, then low heat for 45 minutes. Let it rest for 5 minutes before serving.",
    country: "India",
    imageUrl:"https://butfirstchai.com/wp-content/uploads/2025/09/keema-biryani-recipe.jpg"
  }
];

export default foodData;