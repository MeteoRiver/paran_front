"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { getBooks, getIsLoading, getError } from "@/lib/features/group/book.slice";
import { useAppDispatch } from "@/lib/store";
import { defaultFile, FileType } from "@/app/model/file/file.model";
import { bookService } from "@/app/service/group/book.service";
import { fileService } from "@/app/service/File/file.service";
import { getFiles } from "@/lib/features/file/file.slice";
import LoadingSpinner from "../status/LoadingSpinner";
import ErrorMessage from "../status/ErrorMessage";
import Pagination from "./pagination/Pagination";

interface BookRowProps {
  active: boolean;
  onSelect: () => void;
}

export default function BookRow({ active, onSelect }: BookRowProps) {
  const dispatch = useAppDispatch();
  const books = useSelector(getBooks);
  const files = useSelector(getFiles);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await bookService.findList(currentPage, pageSize, dispatch);
        if (result && result.totalElements) {
          setTotalItems(result.totalElements);
        }
        const bookIds = books.map(book => book.id);
        await fileService.selectFileList(bookIds, FileType.BOOK, dispatch);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [active, dispatch, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            active={active} 
            file={files.bookFiles.find(file => file.refId === book.id) ?? defaultFile(FileType.BOOK, book.id)} 
          />
        ))}
      <Pagination 
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalItems}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
      />
    </>
  );
};