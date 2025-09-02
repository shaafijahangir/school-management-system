import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Pin, ThumbsUp, Reply, Plus } from 'lucide-react';

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: string;
  authorInitials: string;
  date: string;
  replies: number;
  likes: number;
  isPinned: boolean;
  tags: string[];
}

const mockDiscussions: Discussion[] = [
  {
    id: '1',
    title: 'Help with Ray Tracing Assignment',
    content: 'I\'m having trouble with sphere intersection calculations. Can someone point me in the right direction?',
    author: 'Alex Chen',
    authorInitials: 'AC',
    date: '2025-03-12',
    replies: 5,
    likes: 3,
    isPinned: false,
    tags: ['assignment', 'help']
  },
  {
    id: '2',
    title: 'Exam Study Group - March 18th',
    content: 'Anyone interested in forming a study group for the midterm? I\'m thinking we could meet this weekend.',
    author: 'Sarah Kim',
    authorInitials: 'SK',
    date: '2025-03-11',
    replies: 8,
    likes: 12,
    isPinned: true,
    tags: ['study-group', 'exam']
  },
  {
    id: '3',
    title: 'Great Resources for Shader Programming',
    content: 'Found some excellent tutorials that helped me understand GLSL better. Sharing links in comments!',
    author: 'Mike Johnson',
    authorInitials: 'MJ',
    date: '2025-03-10',
    replies: 3,
    likes: 7,
    isPinned: false,
    tags: ['resources', 'shaders']
  }
];

const DiscussionForum = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleCreatePost = () => {
    // Mock create post functionality
    console.log('Creating post:', { title: newPostTitle, content: newPostContent });
    setNewPostTitle('');
    setNewPostContent('');
    setShowNewPost(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Course Discussions
          </CardTitle>
          <Button 
            onClick={() => setShowNewPost(!showNewPost)}
            size="sm"
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* New Post Form */}
        {showNewPost && (
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="space-y-3">
              <Input
                placeholder="Discussion title..."
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              <Textarea
                placeholder="What would you like to discuss?"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                rows={4}
              />
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setShowNewPost(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreatePost}>
                  Post Discussion
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Discussion List */}
        {mockDiscussions.map((discussion) => (
          <Card key={discussion.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {discussion.authorInitials}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {discussion.isPinned && (
                        <Pin className="h-4 w-4 text-blue-600" />
                      )}
                      <h3 className="font-semibold text-gray-900">{discussion.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{discussion.content}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {discussion.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>by {discussion.author}</span>
                    <span>{new Date(discussion.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      {discussion.replies}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      {discussion.likes}
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Reply className="h-3 w-3 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default DiscussionForum;