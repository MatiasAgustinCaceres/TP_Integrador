// Basic Tags
import { Div, Tag, Anchor, Icon } from "atomize";

export default function BasicTags(){
  return (
    <Div d="flex">
      <Tag m={{ r: "1rem", b: "1rem" }}>Tag 1</Tag>
      <Tag m={{ r: "1rem", b: "1rem" }}>Link</Tag>
      <Tag
        m={{ r: "1rem", b: "1rem" }}
        suffix={
          <Icon
            name="Cross"
            size="12px"
            m={{ l: "1rem" }}
            cursor="pointer"
          />
        }
      >
        Close
      </Tag>
      <Tag
        m={{ r: "1rem", b: "1rem" }}
        prefix={<Icon name="Edit" size="12px" m={{ r: "0.25rem" }} />}
      >
        Edit
      </Tag>
      <Anchor href="https://www.google.com" target="_blank">
        <Tag
          hoverBg="info200"
          m={{ r: "1rem", b: "1rem" }}
          prefix={<Icon name="Link" size="12px" m={{ r: "0.25rem" }} />}
          cursor="pointer"
        >
          Link
        </Tag>
      </Anchor>
    </Div>
  );
}