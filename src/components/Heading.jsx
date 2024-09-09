/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Heading = () => {
  return (
    <>
      <h1 
        css={css({
          textAlign: 'center',
          marginBottom: '25px',
          color: 'var(--color-white)',
        })}
      >MBTI 번역기</h1>
    </>
  );
};

export default Heading;