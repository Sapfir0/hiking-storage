import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

export function TagSelector({ multiple, tags }: {
  tags: string[],
  preselected?: string,
  multiple: boolean
}) {
  const [selectedTags, setTags] = React.useState<string[]>([]);

  const handleFormat = (
    _: React.MouseEvent<HTMLElement>, newTags: string[]
  ) => {
    setTags(newTags);
  };

  return <ToggleButtonGroup
    value={selectedTags}
    onChange={handleFormat}
    exclusive={multiple}
    aria-label="text alignment"
  >
    {tags.map(tag => <ToggleButton value={tag}>
      {tag}
    </ToggleButton>)}

  </ToggleButtonGroup>;
}