import clsx from "clsx";
import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { Checkbox } from "@mui/material";
import Button from "../../../../../components/Button/Button";
import { useModalContext } from "../../../../../contexts/ModalContext";
import { useFeatsContext } from "../../../../../contexts/FeatsContext";
import { useConnectFeatToPlayerMutation } from "../../../../../generated/graphql";

interface PlayerFeatsProps {
  currentPage: number;
}

function PlayerFeats(props: PlayerFeatsProps) {
  const { currentPage } = props;
  const { playerFeats, loading, player } = usePlayerContext();
  const { feats } = useFeatsContext();
  const { openModal, closeModal, setModalContent } = useModalContext();
  const [connectFeat] = useConnectFeatToPlayerMutation({
    refetchQueries: "all",
  });
  const display =
    currentPage === 3
      ? ""
      : currentPage === 4
      ? "-translate-x-[calc(100%+32px)]"
      : "translate-x-[calc(100%+32px)]";

  return (
    <div
      className={clsx(
        "w-full h-full transition flex flex-col absolute top-0 left-0",
        display
      )}
    >
      <div className="flex w-full items-center mb-4">
        <section className="justify-self-center self-center text-lg font-semibold">
          Características e Talentos
        </section>
        <Button
          label="Adicionar novo"
          className="ml-auto"
          onClick={() => {
            setModalContent(
              <div className="flex flex-col">
                <span>Talentos disponíveis:</span>
                <ol className="w-20 h-40 overflow-auto">
                  {feats && feats.length === 0 ? (
                    <div>Sem feats criadas</div>
                  ) : (
                    feats?.map((feat, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full hover:bg-slate-100 cursor-pointer"
                          onClick={async () => {
                            if (!player) return;
                            try {
                              await connectFeat({
                                variables: {
                                  payload: {
                                    featId: feat.id,
                                    playerId: player.id,
                                  },
                                },
                              });
                            } catch (error) {
                              console.log(error);
                            } finally {
                              closeModal();
                            }
                          }}
                        >
                          {feat.name}
                        </div>
                      );
                    })
                  )}
                </ol>
              </div>
            );
            openModal();
          }}
        />
      </div>
      <ol className="w-full h-full border border-black p-4 grid grid-cols-3 gap-2">
        {loading ? (
          <span>Carregando...</span>
        ) : (
          !!playerFeats &&
          playerFeats.map((feat, index) => {
            return (
              <div
                className="w-full flex flex-col border border-black max-h-64 p-2"
                key={index}
              >
                <span className="text-base font-medium">
                  {feat.featName} ({feat.source})
                </span>
                {feat.totalCharges && (
                  <div className="flex items-center">
                    <span className="text-sm">
                      Cargas: {feat.currentCharges}/{feat.totalCharges}
                    </span>
                  </div>
                )}
                <span className="flex items-center text-sm">
                  Ativa:{" "}
                  {feat.currentCharges ? <span>Sim</span> : <span>Não</span>}
                </span>
                <div className="w-full h-full border overflow-auto text-sm p-1">
                  {feat.featDescription}
                </div>
              </div>
            );
          })
        )}
      </ol>
    </div>
  );
}

export default PlayerFeats;
