import React, { Component } from "react";
import { fetchImages } from "components/fetchImages/fetchImages";
import toast, { Toaster } from "react-hot-toast";
import { LoadMore } from "components/LoadMore/LoadMore";
import { Modal } from "components/Modal/Modal";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Header } from "components/Header/Header";
import { SpinnerLoader } from "components/Spinner/Spinner";

export class WrapperGallery extends Component {
  state = {
    query: null,
    page: 1,
    images: null,
    quantityImages: 0,
    totalHits: 0,
    selectedImage: null,
    status: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const getImages = async (page, query) => {
      this.setState({ status: "panding" });
      const data = await fetchImages({ page, query });

      this.setState({ totalHits: data.data.totalHits });
      return data.data.hits;
    };

    const setImages = (newImages) => {
      if (prevState.page !== this.state.page) {
        this.setState((el) => ({
          images: [...el.images, ...newImages],
        }));
      }
      if (prevState.query !== this.state.query) {
        this.setState({
          images: newImages,
        });
      }
    };

    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      if (this.state.query.trim() === "" || this.state.query.length < 2) {
        return;
      }

      if (prevState.query !== this.state.query && this.state.page > 1) {
        this.setState({ page: 1, images: [] });
        return;
      }

      const newImages = await getImages(this.state.page, this.state.query);
      setImages(newImages);
      this.setState({ quantityImages: this.state.images.length });
      if (this.state.totalHits === 0) {
        this.setState({ status: "error" });
        return toast.error(
          `search for the query "${this.state.query}" gave nothing `,
          {
            duration: 3000,
            style: {
              backgroundColor: "red",
              marginTop: 50,
              transition: "all 3s ease-out",
            },
          }
        );
      }
      this.setState({ status: "resolved" });

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handlePage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleSelectImage = (largeImageURL) => {
    this.setState({ selectedImage: largeImageURL });
  };

  closeModal = (e) => {
    this.setState({ selectedImage: null });
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    const { images, status, quantityImages, totalHits, selectedImage } =
      this.state;

    const { handleFormSubmit, handleSelectImage, handlePage, closeModal } =
      this;

    return (
      <>
        <Header onSubmit={handleFormSubmit} />
        {status === "panding" && <SpinnerLoader />}
        {status === "error" && <Toaster />}
        {status === "resolved" && (
          <>
            <ImageGallery
              images={images}
              handleSelectImage={handleSelectImage}
            />
            {totalHits !== quantityImages && (
              <LoadMore handlePage={handlePage} />
            )}
            {selectedImage && (
              <Modal selectedImage={selectedImage} closeModal={closeModal} />
            )}
          </>
        )}
      </>
    );
  }
}
