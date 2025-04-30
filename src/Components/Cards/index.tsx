import React from 'react';
import { Card as NativeCard } from 'antd';

interface CardTypes {
    title?: string;
    extra?: string;
    content?: string;
}

const Card: React.FC<CardTypes> = ({ title, extra, content }) => (
    <NativeCard
        style={{ boxShadow: "1px 2px 11px 0px gray" }}
        title={title}
        extra={<a href="#">{extra}</a>}
        hoverable
    >
        <p>{content}</p>
    </NativeCard>
);

export default Card;
