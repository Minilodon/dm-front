import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import { useFeatsContext } from "../../contexts/FeatsContext";
import { useDrawerContext } from "../../contexts/DrawerContext";
import CreateFeatDrawer from "./components/CreateFeatDrawer";
import { useModalContext } from "../../contexts/ModalContext";
import Button from "../../components/Button/Button";
import { useDeleteFeatMutation } from "../../generated/graphql";
import Test from "./components/Test";
import DOMPurify from "dompurify";

function FeatsPage() {
  const { feats, loading } = useFeatsContext();
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const { openModal, setModalContent, closeModal } = useModalContext();
  const handleClick = () => {
    setDrawerTitle("Criar talento ou habilidade");
    setDrawerContent(<CreateFeatDrawer />);
    openDrawer();
  };
  const [deleteFeat, { loading: deletingFeat }] = useDeleteFeatMutation({
    refetchQueries: "all",
  });

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
                          <span>Deseja deletar {feat.name}?</span>
                          <span>
                            Ao fazer isso, todos os jogadores com esse talento
                            perderão ele
                          </span>
                          <Button
                            disabled={deletingFeat}
                            label="Sim"
                            onClick={async () => {
                              if (!feat.id) return;
                              try {
                                await deleteFeat({
                                  variables: { featId: feat.id },
                                });
                              } catch (error) {
                                console.log(error);
                              } finally {
                                closeModal();
                              }
                            }}
                          />
                        </div>
                      );
                      openModal();
                    }}
                  >
                    X
                  </span>
                  <span className="self-center text-lg font-semibold mb-4">
                    {feat.name}
                  </span>
                  <div className="h-52 overflow-auto text-sm">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(feat.description),
                      }}
                    ></p>
                  </div>
                  {feat.players && (
                    <div className="flex flex-col">
                      <span>Usado em:</span>
                      <div className="h-10 overflow-auto">
                        {feat.players.map((player, index) => (
                          <div className="text-sm" key={index}>
                            {player?.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </Page>
  );
}

export default FeatsPage;
