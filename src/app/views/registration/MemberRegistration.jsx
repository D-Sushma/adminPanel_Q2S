import React from 'react';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import AutocompleteCombo from './AutocompleteCombo';
// import PaginationTable from './PaginationTable';
import Layout1 from './components/MatxLayout/Layout1/Layout1';



export default function MemberRegistration() {
  // -------------FOR BACK BUTTON--------------------
  // const navigate = useNavigate();
  return (
    <>
      {/* <Button
        // fullWidth
        color="primary"
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ mt: 2, mb: 2, ml: 2 }}
        >
        Go Back
      </Button> */}

      <Layout1/>
      {/* <div>MemberRegistration</div> */}
      {/* ---------------FOR COMBO BOX------------------------------------ */}
      {/* <AutocompleteCombo /> */}
      {/* ------------PAGINATION TABLE--------------------------------- */}
      {/* <PaginationTable /> */}
    </>
  );
}
