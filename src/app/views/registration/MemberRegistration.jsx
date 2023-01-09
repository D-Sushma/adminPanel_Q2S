import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AutocompleteCombo from './AutocompleteCombo';
import PaginationTable from './PaginationTable';

import Dashboard from '../dashboard/Analytics';

export default function MemberRegistration() {
  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();
  return (
    <>
    <Dashboard />
      <Button
        // fullWidth
        color="primary"
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ mt: 2, mb: 2, ml: 2 }}
      >
        Go Back
      </Button>
      <div>MemberRegistration</div>
      {/* ---------------FOR COMBO BOX------------------------------------ */}
      <AutocompleteCombo />
      {/* ------------PAGINATION TABLE--------------------------------- */}
      <PaginationTable />
    </>
  );
}
