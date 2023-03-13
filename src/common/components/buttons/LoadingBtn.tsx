import LoadingButton from '@mui/lab/LoadingButton'

export const LoadingBtn = () => {
  return (
    <LoadingButton
      loading
      variant="contained"
      style={{ border: '2px solid #2196f3', maxHeight: '27px', width: '66px' }}
      sx={{
        '& .MuiLoadingButton-loadingIndicator': {
          color: '#2196f3',
        },
      }}
    >
      Loading ...
    </LoadingButton>
  )
}
