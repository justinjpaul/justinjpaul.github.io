import { useState } from "react";
import SingleProjectCard from "./SingleProjectCard";
import ModalCard from "./ModalCard";

import Grid from "@mui/joy/Grid";
import { projects } from "../../../constants/projects";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

export default function Projects() {
  const [modalChosen, setModalChosen] = useState(undefined);

  const onClose = () => {
    setModalChosen(undefined);
  };

  return (
    <>
      <Typography level="h1">Projects</Typography>
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
              sx={{ display: "flex" }}
              key={`projectSingleCard-${i}`}
              sm={12}
              md={6}
              lg={4}
            >
              <SingleProjectCard
                props={proj}
                setModalFunction={() => {
                  setModalChosen(i);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Modal open={modalChosen !== undefined} onClose={onClose}>
        <ModalDialog>
          <ModalClose />
          <ModalCard props={projects[modalChosen]} />
        </ModalDialog>
      </Modal>
    </>
  );
}
