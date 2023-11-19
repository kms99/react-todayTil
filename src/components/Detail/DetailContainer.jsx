import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./Detail.styled";
import { useDispatch, useSelector } from "react-redux";
import { radios } from "../../common";
import { ReactComponent as Delete } from "../../styles/image/detailBtn/delete.svg";
import { ReactComponent as Edit } from "../../styles/image/detailBtn/edit.svg";
import { ReactComponent as EditDone } from "../../styles/image/detailBtn/editDone.svg";
import { ReactComponent as EditDismiss } from "../../styles/image/detailBtn/editDismiss.svg";
import { ReactComponent as Home } from "../../styles/image/detailBtn/home.svg";
import DetailButton from "./DetailButton";
import { deleteTil, editTil } from "../../redux/modules/TilList";

const DetailContainer = () => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);

  const findTilData = useSelector((state) => state.TilList.tilList).find(
    (til) => til.id === id
  );

  const [editValue, setEditValue] = useState({
    title: findTilData.title,
    context: findTilData.context,
  });

  const textAreaRef = useRef();
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [editValue]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const EditModeToggleHandler = () => {
    setIsEditMode((prev) => (prev ? false : true));
  };
  const EditModeDismissHandler = () => {
    if (window.confirm("모든 수정사항을 취소하시겠습니까?")) {
      setEditValue({ title: findTilData.title, context: findTilData.context });
      setIsEditMode((prev) => (prev ? false : true));
    } else return;
  };
  const EditModeDoneHandler = () => {
    if (
      findTilData.title === editValue.title &&
      findTilData.context === editValue.context
    ) {
      window.alert("수정된 내용이 없습니다.");
      return;
    }
    if (window.confirm("수정하시겠습니까?")) {
      const editNewTil = { ...findTilData, ...editValue };
      dispatch(editTil(editNewTil));
      setIsEditMode((prev) => (prev ? false : true));
    } else return;
  };
  const DeleteEventHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      dispatch(deleteTil(id));
      navigate("/");
    } else return;
  };
  const titleChangeHandler = (e) => {
    setEditValue((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const contextChangeHandler = (e) => {
    setEditValue((prev) => {
      return { ...prev, context: e.target.value };
    });
  };

  const ConditionImg = radios[findTilData.tilCondition].imgTag;
  return (
    <S.StDetailWrapper>
      <Link to="/">
        <div>
          <Home />
          <span>홈으로</span>
        </div>
      </Link>

      <S.StFirstLine>
        <div>
          <span>{findTilData.date}</span>
          <div>
            <ConditionImg />
            <span>{radios[findTilData.tilCondition].text}</span>
          </div>
        </div>

        {isEditMode ? (
          <div>
            <DetailButton handler={EditModeDoneHandler}>
              <EditDone />
            </DetailButton>
            <DetailButton handler={EditModeDismissHandler}>
              <EditDismiss />
            </DetailButton>
          </div>
        ) : (
          <div>
            <DetailButton handler={EditModeToggleHandler}>
              <Edit />
            </DetailButton>
            <DetailButton handler={DeleteEventHandler}>
              <Delete />
            </DetailButton>
          </div>
        )}
      </S.StFirstLine>

      {isEditMode ? (
        <S.StTitleInput value={editValue.title} onChange={titleChangeHandler} />
      ) : (
        <S.StTitleH1>{findTilData.title}</S.StTitleH1>
      )}
      <S.ContextWrapper>
        <S.StContextP $visible={isEditMode}>{editValue.context}</S.StContextP>
        <S.StContextTextarea
          ref={textAreaRef}
          value={editValue.context}
          $visible={isEditMode}
          onChange={contextChangeHandler}
        />
      </S.ContextWrapper>
    </S.StDetailWrapper>
  );
};

export default DetailContainer;
