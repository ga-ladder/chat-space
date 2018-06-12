class GroupsController < ApplicationController
  def index
  end

  def new
    @users = User.where("name like '%#{params[:keyword]}%'")
    @group = Group.new
  end

  def create
    binding.pry
    @group = Group.new(group_params)
    @group.users << current_user
    if @group.save
     respond_to do |format|
       format.html
       format.json
     end
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def update
    if @group.update(group_params)
     respond_to do |format|
       format.html
       format.json
     end
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, {:user_ids => [] })
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
