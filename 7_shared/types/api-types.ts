export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePostRequest = {
  description: Scalars['String'];
  mediaUrl: Scalars['String'];
  title: Scalars['String'];
};

export type DeletePostResponse = {
  __typename?: 'DeletePostResponse';
  id: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type EditProfileProblemUnion =
  | EmailAlreadyUsedProblem
  | PhoneAlreadyUsedProblem;

export type EditProfileRequest = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** ex. 1996-09-23 */
  birthDate?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GenderType>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type EditProfileResponse = {
  __typename?: 'EditProfileResponse';
  problem?: Maybe<EditProfileProblemUnion>;
  user?: Maybe<UserModel>;
};

export type EmailAlreadyUsedProblem = {
  __typename?: 'EmailAlreadyUsedProblem';
  message: Scalars['String'];
};

export type EmailOrPasswordIncorrectProblem = {
  __typename?: 'EmailOrPasswordIncorrectProblem';
  message: Scalars['String'];
};

export type FindFavouritePostsPaginationResponse = {
  __typename?: 'FindFavouritePostsPaginationResponse';
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindFavouritePostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type FindMyPostsPaginationResponse = {
  __typename?: 'FindMyPostsPaginationResponse';
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindMyPostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type FindPostsPaginationResponse = {
  __typename?: 'FindPostsPaginationResponse';
  data?: Maybe<Array<PostModel>>;
  pageInfo?: Maybe<PageAfterCursorInfo>;
};

export type FindPostsRequest = {
  afterCursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  type: PostFilterType;
};

export enum GenderType {
  Female = 'FEMALE',
  Male = 'MALE',
}

export type Mutation = {
  __typename?: 'Mutation';
  postCreate: PostModel;
  postDelete: DeletePostResponse;
  postLike: PostModel;
  postUnlike: PostModel;
  userEditProfile: EditProfileResponse;
  userSignIn: SignInResponse;
  userSignUp: SignUpResponse;
};

export type MutationPostCreateArgs = {
  input: CreatePostRequest;
};

export type MutationPostDeleteArgs = {
  input: PostIdRequest;
};

export type MutationPostLikeArgs = {
  input: PostIdRequest;
};

export type MutationPostUnlikeArgs = {
  input: PostIdRequest;
};

export type MutationUserEditProfileArgs = {
  input: EditProfileRequest;
};

export type MutationUserSignInArgs = {
  input: SignInRequest;
};

export type MutationUserSignUpArgs = {
  input: SignUpRequest;
};

export type PageAfterCursorInfo = {
  __typename?: 'PageAfterCursorInfo';
  afterCursor?: Maybe<Scalars['String']>;
  count: Scalars['Float'];
  perPage: Scalars['Float'];
};

export type PhoneAlreadyUsedProblem = {
  __typename?: 'PhoneAlreadyUsedProblem';
  message: Scalars['String'];
};

export enum PostFilterType {
  New = 'NEW',
  Top = 'TOP',
}

export type PostIdRequest = {
  /** post id */
  id: Scalars['String'];
};

export type PostModel = {
  __typename?: 'PostModel';
  author: UserModel;
  authorId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  isLiked: Scalars['Boolean'];
  likesCount: Scalars['Float'];
  mediaUrl: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  favouritePosts: FindFavouritePostsPaginationResponse;
  myPosts: FindMyPostsPaginationResponse;
  post: PostModel;
  posts: FindPostsPaginationResponse;
  userMe: UserModel;
};

export type QueryFavouritePostsArgs = {
  input: FindFavouritePostsRequest;
};

export type QueryMyPostsArgs = {
  input: FindMyPostsRequest;
};

export type QueryPostArgs = {
  input: PostIdRequest;
};

export type QueryPostsArgs = {
  input: FindPostsRequest;
};

export type SignInRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  problem?: Maybe<EmailOrPasswordIncorrectProblem>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserModel>;
};

export type SignUpRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  problem?: Maybe<EmailAlreadyUsedProblem>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserModel>;
};

export type UserModel = {
  __typename?: 'UserModel';
  avatarUrl?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  /** ex. 2cdc8ab1-6d50-49cc-ba14-54e4ac7ec231 */
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};
