import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@indywise/uikit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { IMentee } from '../../../interfaces/IMentee';
import { api } from '../../../api';

export interface IEnquireModalProps {
  mentee: IMentee;
}

const MoreSkillsList: React.FC<IEnquireModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const { mentee } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const {
      target: { value }
    } = event;

    setMessage(value);
  };

  const enquireAboutMentee = async () => {
    const data = { message, menteeId: mentee.ID };
    await api.mentee.EnquireAboutMentee(data);
    handleClose();
  };

  return (
    <>
      <ButtonContainer>
        <Button text="Enquire" onClick={handleClickOpen} />
      </ButtonContainer>
      <Dialog
        open={open}
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Add Comment</div>
            <div>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            value={message}
            placeholder="Add Message (Optional)"
            fullWidth
            onChange={handleChange}
            name="message"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={enquireAboutMentee} color="primary">
            Enquire
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MoreSkillsList;

const ButtonContainer = styled.div`
  margin-right: 24px;

  button {
    padding: 0.5rem 3rem;
  }

  @media (max-width: 530px) {
    button {
      width: 100%;
    }
  }
`;
