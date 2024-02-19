import { Header } from "@/components/Header/Header.component";
import { MainTitleDescription } from "@/components/MainTitleDescription/MainTitleDescription.component";
import { SearchBox } from "@/components/SearchBox/SearchBox.component";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container my-8 m-auto">
        <MainTitleDescription
          title="Reabertura Smart Fit"
          description="O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo."
        />
        <SearchBox />
      </main>
    </>
  );
}
