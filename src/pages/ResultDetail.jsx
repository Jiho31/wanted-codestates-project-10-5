import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoSrc from '../assets/logo_pxl.png';
import productSrc from '../assets/temp_product.png';

// 스니펫: rsf

function ResultDetail(props) {
  const navigate = useNavigate();
  const c1 = 'ONE PIECE';
  const attributesData = [
    ['basic', 'style'],
    ['dresses', 'style'],
    ['nomcore', 'style'],
    ['summer', 'season'],
    ['gym', 'occasion'],
    ['outdoor', 'occasion'],
  ];

  const moveToSearchPage = () => {
    navigate('/search');
  };

  return (
    <Container>
      <Head>
        <button>
          <img src={logoSrc} alt="PXL 아이콘" onClick={moveToSearchPage} />
        </button>
      </Head>
      <Body>
        <DetailResult>
          <div>
            <img src={productSrc} alt="product detail view" />
            <p className="section-label">ITEMS</p>
            <div className="category">{c1}</div>
          </div>
          <Divider />
          <div>
            <p className="section-label">ATTRIBUTES</p>
            <Attributes>
              <li className="attributes-item">
                <p>#BASIC</p>
                <p>STYLE</p>
              </li>
              <li>
                <p>#DRESSES</p>
                <p>STYLE</p>
              </li>
              <li>
                <p>#NOMCORE</p>
                <p>STYLE</p>
              </li>
              <li>
                <p>#BASIC</p>
                <p>STYLE</p>
              </li>
              <li>
                <p>#BASIC</p>
                <p>STYLE</p>
              </li>
            </Attributes>
          </div>
        </DetailResult>
        <ResultWrapper>
          <ResultComponent />
          <ResultComponent />
          <ResultComponent />
          <ResultComponent />
          <ResultComponent />
          <ResultComponent />
        </ResultWrapper>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
const Head = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  border-bottom: 2px solid #f3f4f3;

  button {
    width: 9.7rem;
    cursor: pointer;

    img {
      width: inherit;
    }
  }
`;
const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DetailResult = styled.aside`
  width: 42rem;
  height: 100vh;
  padding: 8rem;

  img {
    width: 24.8rem;
    // height: auto;
  }

  .section-label {
    color: #585858;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.1rem;
    margin: 1.8rem 0;
  }
  .category {
    width: 108px;
    height: 40px;
    padding: 0.9rem 0.6rem;
    background-color: #9d6ef5;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.1rem;
    text-align: center;
  }
`;

const Divider = styled.div`
  width: 24.8rem;
  height: 0;
  border-top: 0.15rem solid #f3f4f3;
  margin-top: 2.5rem;
  margin-bottom: 1.8rem;
`;
const Attributes = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ResultWrapper = styled.section`
  width: 100%;
  max-width: 92rem;
  height: auto;
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
`;
const ResultComponent = styled.article`
  width: 17rem;
  height: 33rem;
  background-color: yellow;
  margin: 3rem;
`;

export default ResultDetail;
