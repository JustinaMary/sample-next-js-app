import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import { IAlbum } from "../types";
import { getAlbums } from "../lib/albums";
import AlbumCard from "../components/albums";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({
  allAlbums,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [albumList, setAlbumList] = React.useState(allAlbums);
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <div className="col-md-4 offset-md-4 my-5 text-center">
          <h4>Please Sign in to view the albums</h4>
          <br />
          <button onClick={() => signIn()} className="btn btn-success">Sign in</button>
        </div>
      ) : (
        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
              </p>
              <p>
                <a href="/products" className="btn btn-primary my-2 mx-3">
                  View Products
                </a>
                <a href="/pricing" className="btn btn-secondary my-2">
                  Pricing
                </a>
              </p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {albumList.length > 0 &&
                  albumList.map((data) => (
                    <div className="col-md-4">
                      <AlbumCard album={data}></AlbumCard>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const allAlbums: IAlbum[] = await getAlbums();
  return {
    props: {
      allAlbums,
    },
  };
};
