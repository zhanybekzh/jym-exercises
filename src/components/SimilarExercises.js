import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import Loader from "../components/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h4" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", mb: '80px'}}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            isBodyParts={false}
          ></HorizontalScrollbar>
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", mb: '80px'}}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar
            data={equipmentExercises}
            isBodyParts={false}
          ></HorizontalScrollbar>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
