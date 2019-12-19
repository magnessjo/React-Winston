export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  QueryParameter: any;
  DateTime: any;
};

export type About_About_Entry = EntryInterface &
  ElementInterface & {
    __typename?: 'about_about_Entry';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars['Int']>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars['Int']>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars['Int']>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars['Int']>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars['Int']>;
    /** The ID of the section that contains the entry. */
    sectionId?: Maybe<Scalars['Int']>;
    /** The handle of the section that contains the entry. */
    sectionHandle?: Maybe<Scalars['String']>;
    /** The ID of the entry type that contains the entry. */
    typeId?: Maybe<Scalars['Int']>;
    /** The handle of the entry type that contains the entry. */
    typeHandle?: Maybe<Scalars['String']>;
    /** The entry's post date. */
    postDate?: Maybe<Scalars['DateTime']>;
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars['DateTime']>;
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children?: Maybe<Array<Maybe<EntryInterface>>>;
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>;
    /** The element’s full URL */
    url?: Maybe<Scalars['String']>;
    aboutImage?: Maybe<Array<Maybe<AssetInterface>>>;
    aboutText?: Maybe<Scalars['String']>;
    aboutType?: Maybe<Scalars['String']>;
  };

export type About_About_EntryChildrenArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  section?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  typeId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  authorId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  authorGroup?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  postDate?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type About_About_EntryAboutImageArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  volumeId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  volume?: Maybe<Array<Maybe<Scalars['String']>>>;
  folderId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  filename?: Maybe<Array<Maybe<Scalars['String']>>>;
  kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
};

export type About_Asset = AssetInterface &
  ElementInterface & {
    __typename?: 'about_Asset';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars['Int']>;
    /** The ID of the folder that the asset belongs to. */
    folderId?: Maybe<Scalars['Int']>;
    /** The filename of the asset file. */
    filename?: Maybe<Scalars['String']>;
    /** The file extension for the asset file. */
    extension?: Maybe<Scalars['String']>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint?: Maybe<Scalars['Boolean']>;
    /** The focal point represented as an array with `x` and `y` keys, or null if it's not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
    /** The file kind. */
    kind?: Maybe<Scalars['String']>;
    /** The file size in bytes. */
    size?: Maybe<Scalars['String']>;
    /** The height in pixels or null if it's not an image. */
    height?: Maybe<Scalars['Int']>;
    /** The width in pixels or null if it's not an image. */
    width?: Maybe<Scalars['Int']>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars['String']>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars['String']>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars['String']>;
    /** The asset's path in the volume. */
    path?: Maybe<Scalars['String']>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars['DateTime']>;
  };

export type About_AssetUrlArgs = {
  handle?: Maybe<Scalars['String']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  interlace?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  immediately?: Maybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The ID of the folder that the asset belongs to. */
  folderId?: Maybe<Scalars['Int']>;
  /** The filename of the asset file. */
  filename?: Maybe<Scalars['String']>;
  /** The file extension for the asset file. */
  extension?: Maybe<Scalars['String']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint?: Maybe<Scalars['Boolean']>;
  /** The focal point represented as an array with `x` and `y` keys, or null if it's not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The file kind. */
  kind?: Maybe<Scalars['String']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The height in pixels or null if it's not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it's not an image. */
  width?: Maybe<Scalars['Int']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** The asset's path in the volume. */
  path?: Maybe<Scalars['String']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  handle?: Maybe<Scalars['String']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  interlace?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  immediately?: Maybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The ID of the group that contains the category. */
  groupId?: Maybe<Scalars['Int']>;
  /** The handle of the group that contains the category. */
  groupHandle?: Maybe<Scalars['String']>;
  /** The category’s children. */
  children?: Maybe<Array<Maybe<CategoryInterface>>>;
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  groupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
};

export type Element = ElementInterface & {
  __typename?: 'Element';
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The ID of the section that contains the entry. */
  sectionId?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle?: Maybe<Scalars['String']>;
  /** The ID of the entry type that contains the entry. */
  typeId?: Maybe<Scalars['Int']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle?: Maybe<Scalars['String']>;
  /** The entry's post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children?: Maybe<Array<Maybe<EntryInterface>>>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  section?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  typeId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  authorId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  authorGroup?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  postDate?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Gallery_Asset = AssetInterface &
  ElementInterface & {
    __typename?: 'gallery_Asset';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars['Int']>;
    /** The ID of the folder that the asset belongs to. */
    folderId?: Maybe<Scalars['Int']>;
    /** The filename of the asset file. */
    filename?: Maybe<Scalars['String']>;
    /** The file extension for the asset file. */
    extension?: Maybe<Scalars['String']>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint?: Maybe<Scalars['Boolean']>;
    /** The focal point represented as an array with `x` and `y` keys, or null if it's not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
    /** The file kind. */
    kind?: Maybe<Scalars['String']>;
    /** The file size in bytes. */
    size?: Maybe<Scalars['String']>;
    /** The height in pixels or null if it's not an image. */
    height?: Maybe<Scalars['Int']>;
    /** The width in pixels or null if it's not an image. */
    width?: Maybe<Scalars['Int']>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars['String']>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars['String']>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars['String']>;
    /** The asset's path in the volume. */
    path?: Maybe<Scalars['String']>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars['DateTime']>;
    galleryCategory?: Maybe<Array<Maybe<CategoryInterface>>>;
    gallerySummary?: Maybe<Scalars['String']>;
  };

export type Gallery_AssetUrlArgs = {
  handle?: Maybe<Scalars['String']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  interlace?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  immediately?: Maybe<Scalars['Boolean']>;
};

export type Gallery_AssetGalleryCategoryArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  groupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
};

export type GalleryType_Category = CategoryInterface &
  ElementInterface & {
    __typename?: 'galleryType_Category';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars['Int']>;
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars['Int']>;
    /** The element’s level within its structure */
    level?: Maybe<Scalars['Int']>;
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars['Int']>;
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars['Int']>;
    /** The ID of the group that contains the category. */
    groupId?: Maybe<Scalars['Int']>;
    /** The handle of the group that contains the category. */
    groupHandle?: Maybe<Scalars['String']>;
    /** The category’s children. */
    children?: Maybe<Array<Maybe<CategoryInterface>>>;
    /** The category’s parent. */
    parent?: Maybe<CategoryInterface>;
  };

export type GalleryType_CategoryChildrenArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  groupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
};

/** This is the interface implemented by all global sets. */
export type GlobalSetInterface = {
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The name of the global set. */
  name?: Maybe<Scalars['String']>;
  /** The handle of the global set. */
  handle?: Maybe<Scalars['String']>;
};

export type Introduction_Asset = AssetInterface &
  ElementInterface & {
    __typename?: 'introduction_Asset';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars['Int']>;
    /** The ID of the folder that the asset belongs to. */
    folderId?: Maybe<Scalars['Int']>;
    /** The filename of the asset file. */
    filename?: Maybe<Scalars['String']>;
    /** The file extension for the asset file. */
    extension?: Maybe<Scalars['String']>;
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint?: Maybe<Scalars['Boolean']>;
    /** The focal point represented as an array with `x` and `y` keys, or null if it's not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
    /** The file kind. */
    kind?: Maybe<Scalars['String']>;
    /** The file size in bytes. */
    size?: Maybe<Scalars['String']>;
    /** The height in pixels or null if it's not an image. */
    height?: Maybe<Scalars['Int']>;
    /** The width in pixels or null if it's not an image. */
    width?: Maybe<Scalars['Int']>;
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars['String']>;
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars['String']>;
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars['String']>;
    /** The asset's path in the volume. */
    path?: Maybe<Scalars['String']>;
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars['DateTime']>;
  };

export type Introduction_AssetUrlArgs = {
  handle?: Maybe<Scalars['String']>;
  transform?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  interlace?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  immediately?: Maybe<Scalars['Boolean']>;
};

export type Introduction_GlobalSet = GlobalSetInterface &
  ElementInterface & {
    __typename?: 'introduction_GlobalSet';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The name of the global set. */
    name?: Maybe<Scalars['String']>;
    /** The handle of the global set. */
    handle?: Maybe<Scalars['String']>;
    introductionImage?: Maybe<Array<Maybe<AssetInterface>>>;
    introductionSummary?: Maybe<Scalars['String']>;
  };

export type Introduction_GlobalSetIntroductionImageArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  volumeId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  volume?: Maybe<Array<Maybe<Scalars['String']>>>;
  folderId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  filename?: Maybe<Array<Maybe<Scalars['String']>>>;
  kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  ping?: Maybe<Scalars['String']>;
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** This query is used to query for global sets. */
  globalSets?: Maybe<Array<Maybe<GlobalSetInterface>>>;
  /** This query is used to query for categories. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
};

export type QueryEntriesArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  section?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectionId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  typeId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  authorId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  authorGroup?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorGroupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  postDate?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryAssetsArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  volumeId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  volume?: Maybe<Array<Maybe<Scalars['String']>>>;
  folderId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  filename?: Maybe<Array<Maybe<Scalars['String']>>>;
  kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateModified?: Maybe<Scalars['String']>;
  includeSubfolders?: Maybe<Scalars['Boolean']>;
};

export type QueryGlobalSetsArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  handle?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryCategoriesArgs = {
  id?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
  uid?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived?: Maybe<Scalars['Boolean']>;
  trashed?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteId?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  enabledForSite?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  relatedTo?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relatedToAll?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ref?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixedOrder?: Maybe<Scalars['Boolean']>;
  inReverse?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateUpdated?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  withStructure?: Maybe<Scalars['Boolean']>;
  structureId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  hasDescendants?: Maybe<Scalars['Boolean']>;
  ancestorOf?: Maybe<Scalars['Int']>;
  ancestorDist?: Maybe<Scalars['Int']>;
  descendantOf?: Maybe<Scalars['Int']>;
  descendantDist?: Maybe<Scalars['Int']>;
  leaves?: Maybe<Scalars['Boolean']>;
  editable?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  groupId?: Maybe<Array<Maybe<Scalars['QueryParameter']>>>;
};

export type User = UserInterface &
  ElementInterface & {
    __typename?: 'User';
    /** The id of the entity */
    id?: Maybe<Scalars['ID']>;
    /** The uid of the entity */
    uid?: Maybe<Scalars['String']>;
    /** The element’s title. */
    title?: Maybe<Scalars['String']>;
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']>;
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']>;
    /** Whether the element is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']>;
    /** Whether the element is archived or not. */
    archived?: Maybe<Scalars['Boolean']>;
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']>;
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['String']>;
    /** Whether the element has been soft-deleted or not. */
    trashed?: Maybe<Scalars['Boolean']>;
    /** The element's status. */
    status?: Maybe<Scalars['String']>;
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']>;
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']>;
    /** The user's first name or username. */
    friendlyName?: Maybe<Scalars['String']>;
    /** The user's full name. */
    fullName?: Maybe<Scalars['String']>;
    /** The user's full name or username. */
    name?: Maybe<Scalars['String']>;
    /** The user’s preferences. */
    preferences?: Maybe<Scalars['String']>;
    /** The user’s preferred language. */
    preferredLanguage?: Maybe<Scalars['String']>;
    /** The username. */
    username?: Maybe<Scalars['String']>;
    /** The user's first name. */
    firstName?: Maybe<Scalars['String']>;
    /** The user's last name. */
    lastName?: Maybe<Scalars['String']>;
    /** The user's email. */
    email?: Maybe<Scalars['String']>;
  };

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** The id of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The uid of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The element's status. */
  status?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user's first name or username. */
  friendlyName?: Maybe<Scalars['String']>;
  /** The user's full name. */
  fullName?: Maybe<Scalars['String']>;
  /** The user's full name or username. */
  name?: Maybe<Scalars['String']>;
  /** The user’s preferences. */
  preferences?: Maybe<Scalars['String']>;
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']>;
  /** The username. */
  username?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The user's email. */
  email?: Maybe<Scalars['String']>;
};

export type GetAboutEntriesQueryVariables = {};

export type GetAboutEntriesQuery = {
  __typename?: 'Query';
  entries: Maybe<
    Array<
      Maybe<{
        __typename?: 'about_about_Entry';
        aboutType: Maybe<string>;
        aboutText: Maybe<string>;
        title: Maybe<string>;
        url: Maybe<string>;
        aboutImage: Maybe<
          Array<
            Maybe<
              | { __typename?: 'gallery_Asset'; url: Maybe<string> }
              | { __typename?: 'about_Asset'; url: Maybe<string> }
              | { __typename?: 'introduction_Asset'; url: Maybe<string> }
            >
          >
        >;
      }>
    >
  >;
};

export type GetCategoriesAssetsQueryVariables = {};

export type GetCategoriesAssetsQuery = {
  __typename?: 'Query';
  categories: Maybe<
    Array<
      Maybe<{
        __typename?: 'galleryType_Category';
        id: Maybe<string>;
        title: Maybe<string>;
      }>
    >
  >;
  assets: Maybe<
    Array<
      Maybe<
        | {
            __typename?: 'gallery_Asset';
            gallerySummary: Maybe<string>;
            title: Maybe<string>;
            url: Maybe<string>;
            galleryCategory: Maybe<
              Array<
                Maybe<{
                  __typename?: 'galleryType_Category';
                  id: Maybe<string>;
                  title: Maybe<string>;
                }>
              >
            >;
          }
        | {
            __typename?: 'about_Asset';
            title: Maybe<string>;
            url: Maybe<string>;
          }
        | {
            __typename?: 'introduction_Asset';
            title: Maybe<string>;
            url: Maybe<string>;
          }
      >
    >
  >;
};

export type GetGlobalsQueryVariables = {};

export type GetGlobalsQuery = {
  __typename?: 'Query';
  globalSets: Maybe<
    Array<
      Maybe<{
        __typename?: 'introduction_GlobalSet';
        introductionSummary: Maybe<string>;
        introductionImage: Maybe<
          Array<
            Maybe<
              | { __typename?: 'gallery_Asset'; url: Maybe<string> }
              | { __typename?: 'about_Asset'; url: Maybe<string> }
              | { __typename?: 'introduction_Asset'; url: Maybe<string> }
            >
          >
        >;
      }>
    >
  >;
};
