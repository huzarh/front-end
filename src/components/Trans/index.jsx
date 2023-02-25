import { TranslatorProvider, useTranslate } from "react-translate"
 
let translations = {
  locale: "fr",
  Home: {
    "HELLO": "Hello"
  }
};
 
function Home() {
  let t = useTranslate("Home");
  return <h1> {t("HELLO")} </h1>
}
 
const  Tran =()=> {
  return (
    <TranslatorProvider translations={translations}>
      <Home />
    </TranslatorProvider>
  )
}
export default Tran;