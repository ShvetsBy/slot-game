import React, { FC } from "react";

interface dataDisplayProps {
    title: string;
    data: string;
  }

export const DataDisplay:FC<dataDisplayProps> = ({ title,data }) => {
    return (
        <div>
            <p className="data-title">{title}</p>
            <p className="data-value">{data}</p>
        </div>
    )
}