import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { MyEditor } from "./EditorForm.styles";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const EditorForm = () => {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [rawTextData, setRawTextData] = useState("");
  const [title, setTitle] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const onEditorStateChange = (editorText) => {
    // editorState에 값 설정

    setEditorState(editorText);

    let markUp = convertToRaw(editorText.getCurrentContent());

    setRawTextData(draftToHtml(markUp));

    //데이터에 저장 밑 상태관리 기능 추가 redux
  };

  let initialTitle = "new Memo";
  let initalText = `<p>😁🤗 'sakjf;laksj;lkfa;ljdf;as;f;<br></p>
  <p>as;oeifja;sijf;lsak<del>asefasef</del>aasefasef</p>`;

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(initalText);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      // editor 에 넣기
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
      // 미리보기에 넣기
      let markUp = convertToRaw(editorState.getCurrentContent());
      setRawTextData(draftToHtml(markUp));
    }
    setTitle(initialTitle);
  }, []);

  const showdateRaw = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <div className="title">
        <label htmlFor="title">title : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <MyEditor>
        <Editor
          // 에디터와 툴바 모두에 적용되는 클래스
          wrapperClassName="wrapper-class"
          // 에디터 주변에 적용된 클래스
          editorClassName="editor"
          // 툴바 주위에 적용된 클래스
          toolbarClassName="toolbar-class"
          // 툴바 설정
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
            locale: "ko",
          }}
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
        <button type="click" onClick={showdateRaw}>
          {showPreview ? "hide" : "show"}
        </button>
        {showPreview ? (
          <div
            style={{
              margin: "auto",
              width: "500px",
              border: "1px solid black",
            }}
            dangerouslySetInnerHTML={{ __html: rawTextData }}
          ></div>
        ) : (
          ""
        )}
      </MyEditor>
    </>
  );
};
export default EditorForm;
