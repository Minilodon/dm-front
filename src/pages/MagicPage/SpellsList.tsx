import React from "react";
import { useSpellContext } from "../../contexts/SpellContext";
import { useDrawerContext } from "../../contexts/DrawerContext";
import { useModalContext } from "../../contexts/ModalContext";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

function SpellsList() {
  const { spells, loading } = useSpellContext();
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const { openModal, setModalContent, closeModal } = useModalContext();
  const handleClick = () => {
    setDrawerTitle("Criar talento ou habilidade");
    setDrawerContent(<div>Hehe</div>);
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
          ) : spells?.length === 0 ? (
            <div>Não há talentos para serem mostrados</div>
          ) : (
            spells?.map((spell, index) => {
              return (
                <div
                  className="p-4 bg-white flex flex-col min-w-[260px] shadow m-4 relative"
                  key={index}
                >
                  <span
                    className="absolute top-0 right-0 cursor-pointer"
                    onClick={() => {
                      setModalContent(
                        <div className="flex flex-col">
                          <span>Deseja deletar {spell.name}?</span>
                          <span>
                            Ao fazer isso, todos os jogadores com esse talento
                            perderão ele
                          </span>
                          <Button label="Sim" onClick={() => closeModal()} />
                        </div>
                      );
                      openModal();
                    }}
                  >
                    X
                  </span>
                  <span className="self-center text-lg font-semibold mb-4">
                    {spell.name}
                  </span>
                  <div className="h-52 overflow-auto text-sm">
                    {spell.description}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Page>
  );
}

export default SpellsList;
