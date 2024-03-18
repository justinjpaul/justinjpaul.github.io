import { useState } from "react";
import SingleProjectCard from "./SingleProjectCard";
import ModalCard from "./ModalCard";
import { projects } from "../../../constants/projects";

import { Grid, Modal, ModalClose, ModalDialog } from "@mui/joy";

export default function Projects() {
  const [modalChosen, setModalChosen] = useState(undefined);

  const onClose = () => {
    setModalChosen(undefined);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 1,
          justifyContent: "flex-start",
        }}
      >
        {projects.map((proj, i) => {
          return (
            <Grid
              id={`project-${proj.unique}`}
              sx={{ display: "flex" }}
              key={`projectSingleCard-${i}`}
              sm={12}
              md={6}
              lg={4}
            >
              <SingleProjectCard
                {...{
                  ...proj,
                  onClick: () => {
                    setModalChosen(i);
                  },
                }}
              />
            </Grid>
          );
        })}
      </Grid>

      <Modal open={modalChosen !== undefined} onClose={onClose}>
        <ModalDialog>
          <ModalClose />
          <ModalCard {...projects[modalChosen]} />
        </ModalDialog>
      </Modal>
    </>
  );
}
