import { Input, Select, Space } from "antd";
import React from "react";
import { Genre } from "../types/common";

interface FilterPanelProps {
  years: number[];
  genres: Genre[];
  onSearchChange: (value: string) => void;
  onYearChange: (year: number | null) => void;
  onGenresChange: (genres: number[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ years, genres, onSearchChange, onYearChange, onGenresChange }) => {
  return (
    <Space direction="horizontal" size="middle" className="filter-panel">
      <Input placeholder="Search by artist or title" onChange={(e) => onSearchChange(e.target.value)} style={{ width: 200 }} />
      <Select allowClear placeholder="Select Year" style={{ width: 120 }} onChange={onYearChange}>
        {years.map((year) => (
          <Select.Option key={year} value={year}>
            {year}
          </Select.Option>
        ))}
      </Select>
      <Select
        mode="multiple"
        allowClear
        showSearch={false}
        placeholder="Select Genres"
        style={{ width: 400 }}
        maxTagCount={2}
        maxTagPlaceholder={(count: { length: number }) => `+ ${count.length} more`}
        onChange={onGenresChange}
      >
        {genres.map((genre) => (
          <Select.Option key={genre.id} value={genre.id}>
            {genre.name}
          </Select.Option>
        ))}
      </Select>
    </Space>
  );
};
export default FilterPanel;
