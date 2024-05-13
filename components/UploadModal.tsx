'use client';

import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import useUploadModal from '@/hooks/useUploadModal';
import Modal from './Modal';

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: { author: '', tile: '', song: null, image: null },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      //   Reset Form
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (values) => {};

  return (
    <Modal
      title='Add a song'
      description='Upload an mp3 file'
      isOpen={uploadModal.isOpen}
      onChange={onChange}>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </Modal>
  );
};

export default UploadModal;
