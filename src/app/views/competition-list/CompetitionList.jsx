// import React from 'react';
// // import AutocompleteCombo from '../material-kit/auto-complete/AutocompleteCombo';
// import AutocompleteCombo from './AutocompleteCombo';
// import PaginationTable from './PaginationTable';

// export default function CompetitionList() {
//   return (
//     <>
//       <div>CompetitionList</div>
//       <AutocompleteCombo />
//       <PaginationTable />
//     </>
//   );
// }
//============================================================================================================

import AutocompleteCombo from './AutocompleteCombo';
import PaginationTable from './PaginationTable';
import {Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CompetitionList = () => {
  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();
  return (
    <>
      <Button
        // fullWidth
        color="success"
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ mt: 2, mb: 2, ml: 2 }}
      >
        Go Back
      </Button>

      <div>CompetitionList</div>
      {/* --------------COMBO BOX-------------------- */}
      <AutocompleteCombo />

      {/*------------PAGINATITION TABLE---------------*/}
      <PaginationTable />
    </>
  );
};

export default CompetitionList;