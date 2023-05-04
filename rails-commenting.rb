# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#This is a class called blogpostscontroller that inherits from applicationcontroller. The index method is responsible for CRUD actions.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #This fetches the blog post objects from the database and assigns them an instance variable.
    @posts = BlogPost.all
  end

  # ---3)
  #the show method will fetch a snigle blog post from the database using the id and params. That single post now represents the instance variable post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #The new method uses the same instance variable from before except this time it creates an entirely new blog post. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #the create action creates a new object in the database, if it is valid, it will redirect the user to the show view. Edit fetches an existing blog post and modifies it.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # The edit method fetches an exixting blog post entry from the database using id and params, Update also selects an existing entry and allows the user to edit it. GET request.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #update selects an existing entry and updates the details of it, if the data is valid it redirects the user to the show view to see the changes. Destroy deletes an existing blog post using id and params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # this redirects the user to the index view to see all the blog posts
      redirect_to blog_posts_path
    end
  end

  # ---9)
  #this prevents users from submitting unwanted parameters
  private
  def blog_post_params
    # ---10)
    #this makes sure that the params object should contain a blog post, and that only the title and content params should be allowed when creating or updating.
    params.require(:blog_post).permit(:title, :content)
  end
end
