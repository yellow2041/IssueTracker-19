import React from 'react';
import styled from 'styled-components';

// 배경색에 따라서 글자색을 검은색 혹은 흰색을 결정
const calcFontColor = backgroundColor => {
  const d = document.createElement('div');
  d.style.color = backgroundColor;
  const colors = d.style.color.match(/\d+/g).map(color => parseInt(color));

  // https://stackoverflow.com/a/36888120
  const luma = (0.299 * colors[0] + 0.587 * colors[1] + 0.114 * colors[2]) / 255;
  return luma > 0.5 ? 'black' : 'white';
};

const Tag = styled.span`
  padding: 0.25em 0.5em;
  border-radius: 999em;
`;

export default function LabelTag({ name, color, size = '1rem' }) {
  return (
    <Tag style={{ backgroundColor: color, color: calcFontColor(color), fontSize: size }}>
      {name}
    </Tag>
  );
}
