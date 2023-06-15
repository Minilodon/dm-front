import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import { useFeatsContext } from "../../contexts/FeatsContext";

function FeatsPage() {
  const { feats, loading } = useFeatsContext();
  return (
    <Page>
      <Header title="Talentos e Habilidades" />
      <div className="grid grid-cols-5">
        {loading ? (
          <div>Carregando...</div>
        ) : feats?.length === 0 ? (
          <div>Não há talentos para serem mostrados</div>
        ) : (
          feats?.map((feat, index) => {
            return (
              <div
                className="p-4 bg-white flex flex-col min-w-[260px] shadow"
                key={index}
              >
                <span className="self-center text-lg font-semibold mb-4">
                  {feat.name}
                </span>
                <div className="h-52 overflow-auto text-sm">
                  {feat.description}
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
    </Page>
  );
}

export default FeatsPage;
