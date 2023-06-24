import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import { useFeatsContext } from "../../contexts/FeatsContext";
import { useDrawerContext } from "../../contexts/DrawerContext";
import CreateFeatDrawer from "./components/CreateFeatDrawer";
import FeatCard from "./components/FeatCard";

function FeatsPage() {
  const { feats, loading } = useFeatsContext();
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const handleClick = () => {
    setDrawerTitle("Criar talento ou habilidade");
    setDrawerContent(<CreateFeatDrawer />);
    openDrawer();
  };

  return (
    <Page>
      <Header
        title="Talentos e Habilidades"
        buttonAction={handleClick}
        buttonLabel="Criar talento"
      />
      <div className="w-full h-full overflow-y-auto mb-8">
        <div className="grid grid-cols-5">
          {loading ? (
            <div>Carregando...</div>
          ) : feats?.length === 0 ? (
            <div>Não há talentos para serem mostrados</div>
          ) : (
            feats?.map((feat, index) => {
              return <FeatCard key={index} feat={feat} />;
            })
          )}
        </div>
      </div>
    </Page>
  );
}

export default FeatsPage;
