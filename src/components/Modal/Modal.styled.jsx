import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  padding-top: 88px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 55%;
  border-radius: 5px;

  & img {
    display: block;
    max-width: 100%;
    height: auto;
    max-width: 100%; /* устанавливаем максимальную ширину картинки в 100% от родительского контейнера */
  max-height: 100%; /* устанавливаем максимальную высоту картинки в 100% от родительского контейнера */
  object-fit: contain
  }
`;
