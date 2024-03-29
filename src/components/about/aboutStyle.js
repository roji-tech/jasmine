import styled from "styled-components";

export const AboutWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media screen and (min-width: 800px) {
    height: 95vh;
  }

  .about {
    background: var(--bg-dark);
    width: 95%;
    padding: 5px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0 20px 0;
    box-shadow: 0 0 5px 0.5px;

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100%;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
      }
    }

    p {
      padding: 10px;
    }

    .about-info {
      color: var(--bg-white);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &:nth-child(1) {
        text-align: right;
        justify-self: flex-end;
      }

      .about-skills {
        /* list-style: none; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: space-betwdeen;

        h4 {
          padding: 10px;
        }

        li {
          list-style-position: inside;
          list-style-type: circle;
          box-sizing: border-box;
          margin: 10px 0;
          padding-left: 15px;
        }
      }

      .get-job-btn {
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 400px) {
          margin-top: 1em;
          flex-direction: column;
          gap: 0.5em;
        }
      }
    }
  }
`;

export const AboutHead = styled.h3``;

export const AboutPics = styled.div`
  padding: 45px;
  position: relative;

  .about-pics__div {
    position: relative;
    background-color: var(--bg-light);
    background-color: lightblue;
    border-radius: 20px;
    z-index: 0;
  }

  // .about-pics__div::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   background-color: var(--bg-white);
  //   // transform-origin: 0 0;
  //   transform: rotate(4deg);
  //   z-index: -1;
  //   transition: transform 0.3s;
  // }

  // .about-pics__div:hover::after {
  //   transform: rotate(0deg);
  // }

  .about-pics {
    box-sizing: border-box;
    // border: 6px solid blue;
    padding: 0;
    object-fit: cover;
    object-position: 0px 0px;
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    // transform-origin: 0 0;
    transform: rotate(10deg);
    z-index: 1;
    transition: transform 0.4s;
  }

  .about-pics__div:hover .about-pics {
    transform: rotate(0deg);
  }
`;
