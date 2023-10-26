import logo from './logo.svg';
import './App.css';
import Chips from "./ChipList"

const chips =  [
    {
      "description": "A crispy potato chip seasoned with salt and vinegar, a perfect snack for a movie night."
    },
    {
      "description": "Delicious tortilla chips served with a zesty salsa, a classic party favorite."
    },
    {
      "description": "Homemade sweet potato chips, lightly fried to perfection, and sprinkled with cinnamon and sugar."
    },
    {
      "description": "Savory kale chips drizzled with olive oil and sprinkled with parmesan cheese, a healthy alternative to potato chips."
    },
    {
      "description": "Spicy nacho cheese flavored chips, ideal for satisfying your late-night cravings."
    },
    {
      "description": "Exotic taro chips, thinly sliced and fried until they're crunchy and irresistible."
    },
    {
      "description": "Barbecue flavored potato chips, a smoky and tangy treat for your taste buds."
    },
    {
      "description": "Gourmet truffle-infused potato chips, a luxurious snack for special occasions."
    },
    {
      "description": "Crispy pita chips, perfect for dipping into hummus or your favorite Mediterranean spread."
    },
    {
      "description": "Multigrain chips made from a blend of whole grains and seeds, a healthier snack option."
    }
]


const chip_len = 50
const list_len = 4


function App() {
  return (
    <>
      <Chips chips={chips} chip_len={chip_len} list_len={list_len} />
    </>
  );
}

export default App;
