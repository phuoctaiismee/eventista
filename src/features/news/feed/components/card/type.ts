type User = {
  name: string;
  username: string;
  verified: boolean;
  profileImage: string;
};

type Media = {
  type: "image" | "video";
  url: string;
  dimensions?: {
    width: number;
    height: number;
  };
};

type Engagement = {
  likes: number;
  comments: number;
  shares: number;
};

type FeedItem = {
  user: User;
  timestamp: string;
  content: string;
  mentions?: string[];
  links?: string[];
  media?: Media[];
  engagement: Engagement;
};

type Feed = {
  feed: FeedItem[];
};

export type { FeedItem, Feed, User, Media, Engagement };
